'use client';
import { getAllMeetingCategories, addMeetingCategory, deleteMeetingCategory, updateMeetingCategory } from "@/app/_action";
import Heading from "@/components/ui/Heading";
import PageContainer from "@/components/ui/pageContainer";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import { IoTrashBinOutline, IoPencilOutline } from "react-icons/io5";

export default function MeetingCategories() {
  const [categoriesData, setCategoriesData] = useState<any[]>([]);
  const [newCategory, setNewCategory] = useState<boolean>(false);
  const [editingCategoryId, setEditingCategoryId] = useState<number | null>(null);
  const [category, setCategory] = useState<{
    name: string;
    description: string;
  }>({
    name: "",
    description: "",
  });
  const { toast } = useToast();

  const fetchCategories = async () => {
    await getAllMeetingCategories().then((res) => {
      setCategoriesData(res);
    });
  };

  const deleteCategoryWithId = async (id: number) => {
    try {
      await deleteMeetingCategory(id);
      toast({
        title: 'Category deleted'
      });
      fetchCategories();
    } catch (e) {
      toast({
        title: 'Something went wrong'
      });
    }
  };

  const addNewCategory = async () => {
    try {
      if (!category.name) {
        toast({
          title: 'Please fill in the category name'
        });
        return;
      }
      await addMeetingCategory(category);
      fetchCategories();
      setNewCategory(false);
      setCategory({
        name: "",
        description: "",
      });
      toast({
        title: 'Category added'
      });
    } catch (e) {
      toast({
        title: 'Something went wrong'
      });
    }
  };

  const updateCategory = async () => {
    try {
      if (!category.name || !editingCategoryId) {
        toast({
          title: 'Please fill in the category name'
        });
        return;
      }
      await updateMeetingCategory(editingCategoryId, category);
      fetchCategories();
      setEditingCategoryId(null);
      setCategory({
        name: "",
        description: "",
      });
      toast({
        title: 'Category updated'
      });
    } catch (e) {
      toast({
        title: 'Something went wrong'
      });
    }
  };

  const startEditing = (categoryItem: any) => {
    setEditingCategoryId(categoryItem.id);
    setCategory({
      name: categoryItem.name,
      description: categoryItem.description || "",
    });
    setNewCategory(false);
  };

  const cancelEditing = () => {
    setEditingCategoryId(null);
    setCategory({
      name: "",
      description: "",
    });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <PageContainer>
        <Heading text="Meeting Categories Admin" />
        <div className="border border-darkGray rounded-lg p-4 flex flex-col gap-4">
          {/* Add new category button */}
          <span
            className={`${newCategory ? "text-darkGray font-semibold" : "text-lightGray"
              } cursor-pointer`}
            onClick={() => {
              setNewCategory(true);
              setEditingCategoryId(null);
              setCategory({
                name: "",
                description: "",
              });
            }}
          >
            + Add New Category
          </span>

          {/* List of existing categories */}
          {categoriesData && categoriesData.length > 0 ? (
            <div className="flex flex-col gap-2">
              {categoriesData.map((categoryItem) => (
                <div key={categoryItem.id} className="flex items-center justify-between border-b border-lightGray pb-2">
                  <div>
                    <p className="text-darkGray font-medium">{categoryItem.name}</p>
                    {categoryItem.description && (
                      <p className="text-lightGray text-sm">{categoryItem.description}</p>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span
                      onClick={() => startEditing(categoryItem)}
                      className="cursor-pointer text-darkGray hover:text-primary"
                    >
                      <IoPencilOutline size={18} />
                    </span>
                    <span
                      onClick={() => deleteCategoryWithId(categoryItem.id)}
                      className="cursor-pointer text-darkGray hover:text-red-500"
                    >
                      <IoTrashBinOutline size={18} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-lightGray italic">No categories found</p>
          )}

          {/* Form for adding/editing category */}
          {(newCategory || editingCategoryId !== null) && (
            <div className="flex flex-col gap-3 mt-4 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-darkGray">
                {editingCategoryId !== null ? "Edit Category" : "Add New Category"}
              </h3>
              <input
                type="text"
                value={category.name}
                onChange={(e) => {
                  setCategory({ ...category, name: e.target.value });
                }}
                placeholder="Category Name"
                className="border border-lightGray focus:border-darkGray rounded-lg p-2 w-full"
              />
              <input
                type="text"
                value={category.description}
                onChange={(e) => {
                  setCategory({ ...category, description: e.target.value });
                }}
                placeholder="Category Description (optional)"
                className="border border-lightGray focus:border-darkGray rounded-lg p-2 w-full"
              />

              <div className="flex space-x-2">
                {editingCategoryId !== null ? (
                  <>
                    <button
                      onClick={updateCategory}
                      className="bg-darkGray text-white rounded-lg px-4 py-2"
                    >
                      Update Category
                    </button>
                    <button
                      onClick={cancelEditing}
                      className="bg-gray-200 text-darkGray rounded-lg px-4 py-2"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    onClick={addNewCategory}
                    className="bg-darkGray text-white rounded-lg px-4 py-2"
                  >
                    Add Category
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </PageContainer>
    </>
  );
}
