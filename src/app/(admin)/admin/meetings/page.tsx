'use client';
import { getAllMeetingCategories, addMeetingCategory, deleteMeetingCategory, updateMeetingCategory } from "@/app/_action";
import Heading from "@/components/ui/Heading";
import PageContainer from "@/components/ui/pageContainer";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react"
import { IoTrashBinOutline, IoPencilOutline, IoAddOutline } from "react-icons/io5";

export default function MeetingCategories() {
    const [categories, setCategories] = useState<any[]>([]);
    const [showForm, setShowForm] = useState(false);
    const [editingCategoryId, setEditingCategoryId] = useState<number | null>(null);
    const [category, setCategory] = useState<{
        name: string;
        description: string;
    }>({
        name: "",
        description: "",
    })
    const {toast} = useToast();

    const fetchCategories = async () => {
        try {
            const res = await getAllMeetingCategories();
            setCategories(res || []);
        } catch (error) {
            console.error("Error fetching categories:", error);
            toast({
                title: 'Error fetching categories'
            });
        }
    };

    const deleteCategoryWithId = async (id: number) => {
        try {
            await deleteMeetingCategory(id);
            toast({
                title: 'Category deleted'
            });
            fetchCategories();
        } catch (e) {
            console.error("Error deleting category:", e);
            toast({
                title: 'Something went wrong'
            });
        }
    };

    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const addNewCategory = async () => {
        try {
            setErrorMessage("");
            setIsSubmitting(true);
            
            if (!category.name) {
                toast({
                    title: 'Please enter a category name'
                });
                setIsSubmitting(false);
                return;
            }

            // Debug output
            console.log("Attempting to add category:", category);
            
            const result = await addMeetingCategory(category);
            console.log("Add category result:", result);
            
            fetchCategories();
            setShowForm(false);
            setCategory({
                name: "",
                description: "",
            });
            toast({
                title: 'Category added'
            });
        } catch (e) {
            console.error("Error adding category:", e);
            setErrorMessage(e instanceof Error ? e.message : 'Unknown error occurred');
            toast({
                title: 'Error adding category',
                description: e instanceof Error ? e.message : 'Please check the console for details'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const updateCategory = async () => {
        try {
            if (!category.name || !editingCategoryId) {
                toast({
                    title: 'Please enter a category name'
                });
                return;
            }
            await updateMeetingCategory(editingCategoryId, category);
            fetchCategories();
            setEditingCategoryId(null);
            setShowForm(false);
            setCategory({
                name: "",
                description: "",
            });
            toast({
                title: 'Category updated'
            });
        } catch (e) {
            console.error("Error updating category:", e);
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
        setShowForm(true);
    };

    const cancelEditing = () => {
        setEditingCategoryId(null);
        setCategory({
            name: "",
            description: "",
        });
        setShowForm(false);
    };

    useEffect(() => {
        fetchCategories();
    }, [])
    return(
        <>
            <PageContainer>
                <Heading text="Meeting Categories Admin"/>
                <div className="border border-darkGray rounded-lg p-4 flex flex-col gap-4">
                    {/* Add new category button */}
                    <button
                        className="text-darkGray font-semibold flex items-center cursor-pointer bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded w-fit"
                        onClick={() => {
                            setShowForm(true);
                            setEditingCategoryId(null);
                            setCategory({
                                name: "",
                                description: "",
                            });
                        }}
                    >
                        <IoAddOutline size={20} className="mr-1" /> Add New Category
                    </button>

                    {/* List of categories */}
                    <div className="my-4">
                        <h2 className="text-lg font-medium mb-3">Categories</h2>
                        {categories && categories.length > 0 ? (
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {categories.map((categoryItem) => (
                                    <div key={categoryItem.id} className="flex flex-col p-4 border border-lightGray rounded-lg">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-lg font-medium text-darkGray">{categoryItem.name}</h3>
                                                {categoryItem.description && (
                                                    <p className="text-lightGray text-sm mt-1">{categoryItem.description}</p>
                                                )}
                                            </div>
                                            <div className="flex space-x-2">
                                                <button
                                                    onClick={() => startEditing(categoryItem)}
                                                    className="cursor-pointer text-darkGray hover:text-primary p-1"
                                                >
                                                    <IoPencilOutline size={18} />
                                                </button>
                                                <button
                                                    onClick={() => deleteCategoryWithId(categoryItem.id)}
                                                    className="cursor-pointer text-darkGray hover:text-red-500 p-1"
                                                >
                                                    <IoTrashBinOutline size={18} />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <Link 
                                                href={`/admin/meetings/${categoryItem.id}`}
                                                className="inline-flex items-center px-3 py-2 bg-darkGray text-white rounded-lg text-sm hover:bg-opacity-90"
                                            >
                                                View Meetings
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-lightGray italic p-4 bg-gray-50 rounded">No categories found. Add your first category using the button above.</p>
                        )}
                    </div>

                    {/* Form for adding/editing category */}
                    {showForm && (
                        <div className="flex flex-col gap-3 mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                            <h3 className="font-medium text-darkGray text-lg">
                                {editingCategoryId !== null ? "Edit Category" : "Add New Category"}
                            </h3>
                            <div className="mt-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Category Name</label>
                                <input
                                    type="text"
                                    value={category.name}
                                    onChange={(e) => {
                                        setCategory({ ...category, name: e.target.value });
                                    }}
                                    placeholder="Enter category name"
                                    className="border border-lightGray focus:border-darkGray rounded-lg p-2 w-full"
                                />
                            </div>
                            <div className="mt-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Description (optional)</label>
                                <input
                                    type="text"
                                    value={category.description}
                                    onChange={(e) => {
                                        setCategory({ ...category, description: e.target.value });
                                    }}
                                    placeholder="Enter a short description"
                                    className="border border-lightGray focus:border-darkGray rounded-lg p-2 w-full"
                                />
                            </div>

                            <div className="flex space-x-2 mt-4">
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
                                    <>
                                        <button
                                            onClick={addNewCategory}
                                            className="bg-darkGray text-white rounded-lg px-4 py-2"
                                        >
                                            Add Category
                                        </button>
                                        <button
                                            onClick={() => setShowForm(false)}
                                            className="bg-gray-200 text-darkGray rounded-lg px-4 py-2"
                                        >
                                            Cancel
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </PageContainer>
        </>
    )
}