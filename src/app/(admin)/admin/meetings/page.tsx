'use client';
import { getAllMeetings, deleteMeeting, addMeeting } from "@/app/_action";
import Heading from "@/components/ui/Heading";
import PageContainer from "@/components/ui/pageContainer";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react"
import { IoTrashBinOutline } from "react-icons/io5";

export default function Meetings(){
    const [meetingsData, setMeetingsData] = useState<any[]>([]);
    const [newmeeting, setNewMeeting] = useState<boolean>(false);
    const [meeting, setMeeting] = useState<{
        title: string;
        issuesLink: string;
        videoLink: string;
        notes: string;
    }>({
        title: "",
        issuesLink: "",
        videoLink: "",
        notes: "",
    })
    const {toast} = useToast();

    const deleteMeetingWithId = async (id: number) => {
        try{
            await deleteMeeting(id);
            toast({
                title: 'Meeting deleted'
            });
        }catch(e){
            toast({
                title: 'Something went wrong'
            })
        }
    }

    const addNewMeeting = async () => {
        try{
            if(!meeting.title || !meeting.issuesLink || !meeting.videoLink || !meeting.notes){
                toast({
                    title: 'Please fill all fields'
                });
                return;
            }
            await addMeeting(meeting);
            getAllMeetings().then((res) => {
                setMeetingsData(res);
              });
            toast({
                title: 'Meeting added'
            });
        }catch(e){
            toast({
                title: 'Something went wrong'
            })
        }
    }

    

    useEffect(() => {
        async function fetchData(){
            await getAllMeetings().then((res) => {
                setMeetingsData(res);
            })
        }
        fetchData();
    },[])
    return(
        <>
            <PageContainer>
                <Heading text="Meetings Admin"/>
                <div className="border border-darkGray rounded-lg p-4 flex flex-col gap-2">
              <span
                className={`${
                  newmeeting ? "text-darkGray font-semibold" : "text-lightGray"
                } cursor-pointer`}
                onClick={() => {
                  setNewMeeting(true);
                  setMeeting(
                    {
                      title: "",
                      issuesLink: "",
                      videoLink: "",
                      notes: "",
                    }
                  )
                }}
              >
                + Add New Survey
              </span>
              {meetingsData ? (
                <div className="flex flex-col gap-2">
                  {meetingsData.map((meeting, index) => {
                    return (
                      <div key={index} className="flex items-center space-x-4">
                        <p
                          className={`text-lightGray cursor-pointer`}
                        >
                          {meeting.title}
                        </p>
                        <span
                          onClick={() => {
                            deleteMeetingWithId(meeting.id);
                            getAllMeetings().then((res) => {
                              setMeetingsData(res);
                            });
                          }}
                          className="cursor-pointer"
                        >
                          <IoTrashBinOutline size={15} />
                        </span>
                      </div>
                    );
                  })}
                </div>
              ) : null}

            <div className="flex flex-col gap-2">
            <input
                    type="text"
                    value={meeting.title}
                    onChange={(e) => {
                      setMeeting({...meeting, title: e.target.value});
                    }}
                    placeholder="Meeting Title"
                    className="border border-lightGray focus:border-darkGray rounded-lg p-2 w-full"
                  />
                  <input
                    type="text"
                    value={meeting.issuesLink}
                    onChange={(e) => {
                      setMeeting({...meeting, issuesLink: e.target.value});
                    }}
                    placeholder="Issue Link"
                    className="border border-lightGray focus:border-darkGray rounded-lg p-2 w-full"
                  />
                  <input
                    type="text"
                    value={meeting.videoLink}
                    onChange={(e) => {
                      setMeeting({...meeting, videoLink: e.target.value});
                    }}
                    placeholder="Video Link"
                    className="border border-lightGray focus:border-darkGray rounded-lg p-2 w-full"
                  />
                  <input
                    type="text"
                    value={meeting.notes}
                    onChange={(e) => {
                      setMeeting({...meeting, notes: e.target.value});
                    }}
                    placeholder="Meeting Notes"
                    className="border border-lightGray focus:border-darkGray rounded-lg p-2 w-full"
                  />

                <button
                    onClick={() => {
                        addNewMeeting()
                    }}
                    className="bg-darkGray text-white rounded-lg p-2"
                  >
                    Add meeting
                  </button>
            </div>
            </div>

            
            </PageContainer>
        </>
    )
}