"use client";
import PageContainer from "@/components/ui/pageContainer";
import Heading from "@/components/ui/Heading";
import {
  addEipResource,
  addEipResourceTitle,
  deleteEipResource,
  deleteEipResourceTitle,
  getAllEipResourcesTitle,
  getEipResourceTitle
} from "@/app/_action";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import { IoTrashBin } from "react-icons/io5";
import { EipResourceType } from "@prisma/client";


export default function EIPResourcesAdmin() {
  const [eipResourceTitle, setEipResourceTitle] = useState<{
    id: number;
    title: string;
    resources: any[];
  }>({
    id: 0,
    title: "",
    resources: [],
  });
  const [newResource, setNewResource] = useState({
    title: '',
    link: '',
    type: 'BLOG'
  });
  const [newEipName, setNewEipName] = useState("");
  const [eipTitleData, setEipTitleData] = useState<{
    id: number;
    title: string;
    resources: any[];
  }[]>([]);
  const [selectedTitleId,setSelectedTitleId] = useState(0);

  useEffect(() => {
    getAllEipResourcesTitle().then((res) => {
      setEipTitleData(res);
    });
  },[])

  

  const {toast} = useToast();
  return (
    <PageContainer>
      <Heading text="EIP Resources" />
      <div className="border border-darkGray rounded-lg md:p-6 p-3">
        <div className="w-full">
          <div className="flex flex-col gap-2">
          {
            eipTitleData.map((title,index) => (
              <>
                <div onClick={() => {setEipResourceTitle(title); setSelectedTitleId(title.id)}} className={`${selectedTitleId === title.id ? 'text-darkGray' : 'text-lightGray'} cursor-pointer flex w-fll justify-between items-center`} key={index}>
                  {title.title}
                  
                  <span
                    onClick={() => {
                      deleteEipResourceTitle(title.id).then(() => {
                        toast({title: 'EIP Deleted Successfully'});
                        getAllEipResourcesTitle().then((res) => {
                          setEipTitleData(res);
                        });
                      })
                    }}
                    className="text-lightGray"
                  >
                  <IoTrashBin />
                  </span>
                </div>
              </>
            ))
          }
          <span>
          <div className="flex">
                  <input
                    type="text"
                    value={newEipName}
                    onChange={(e) => {
                      setNewEipName(e.target.value);
                    }}
                    onClick={() => {
                      setSelectedTitleId(0)
                    }}
                    placeholder="EIP Name"
                    className="border border-lightGray focus:border-darkGray rounded-lg p-2"
                  />
                  <button
                    onClick={() => {
                      try{
                        if(newEipName === '') return;
                        addEipResourceTitle(newEipName).then(() => {
                          toast({title: 'EIP Added Successfully'});
                          getAllEipResourcesTitle().then((res) => {
                            setEipTitleData(res);
                          });
                          setNewEipName('');
                        })
                      }catch(e){
                        toast({
                          title: 'Something went wrong'
                        });
                      }
                    }}
                    className="bg-darkGray text-white rounded-lg p-2 ml-2"
                  >
                    Create EIP Resource
                  </button>
                </div>
          </span>
          </div>

          
        </div>
      </div>

      {
        selectedTitleId !== 0 && (
          <>
            <div className="border border-darkGray rounded-lg md:p-6 p-3 flex flex-col gap-y-4">
            {
            eipResourceTitle?.resources?.map((resource,index) => (
              <>
                <div className={`'text-lightGray cursor-pointer flex w-fll justify-between items-center`} key={index}>
                  <a href={resource.link} target="_blank">{resource.title}</a>
                  
                  <span
                    onClick={() => {
                      deleteEipResource(resource.id).then(() => {
                        toast({title: 'Resource Deleted Successfully'});
                        getEipResourceTitle(selectedTitleId).then((res) => {
                          setEipResourceTitle(res);
                        });
                      })
                    }}
                    className="text-lightGray"
                  >
                  <IoTrashBin />
                  </span>
                </div>
              </>
            ))
          }
          
                  <input
                    type="text"
                    value={newResource.title}
                    onChange={(e) => {
                      setNewResource({...newResource, title: e.target.value});
                    }}
                    placeholder="Resource Title"
                    className="border border-lightGray focus:border-darkGray rounded-lg p-2 w-full"
                  />
                  <input
                    type="text"
                    value={newResource.link}
                    onChange={(e) => {
                      setNewResource({...newResource, link: e.target.value});
                    }}
                    placeholder="Resource Link"
                    className="border border-lightGray focus:border-darkGray rounded-lg p-2 w-full"
                  />

                  <select className="border border-lightGray focus:border-darkGray rounded-lg p-2 w-full" onChange={(e) => setNewResource({...newResource, type: e.target.value})}>
                    <option value={"BLOG" as EipResourceType}>Blog</option>
                    <option value={"VIDEO" as EipResourceType}>Video</option>
                    <option value={"DISCUSSIONS" as EipResourceType}>Discussions</option>
                  </select>

                  <button
                    onClick={() => {
                      try{
                        if(newResource.title === '' || newResource.link === '') return;
                        addEipResource(selectedTitleId,newResource).then(() => {
                          toast({title: 'Resource Added Successfully'});
                          getEipResourceTitle(selectedTitleId).then((res) => {
                            setEipResourceTitle(res);
                          });
                          setNewEipName('');
                        })
                      }catch(e){
                        toast({
                          title: 'Something went wrong'
                        });
                      }
                    }}
                    className="bg-darkGray text-white rounded-lg p-2 ml-2"
                  >
                    Add Resource
                  </button>

        </div>
          </>
        )
      }
    </PageContainer>
  );
}
