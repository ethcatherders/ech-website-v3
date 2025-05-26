'use client';
import { getMeetingCategory, getAllMeetings, deleteMeeting, addMeeting } from "@/app/_action";
import Heading from "@/components/ui/Heading";
import PageContainer from "@/components/ui/pageContainer";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState, useCallback } from "react";
import { IoTrashBinOutline, IoPencilOutline, IoArrowBackOutline } from "react-icons/io5";
import { useParams } from "next/navigation";

export default function CategoryMeetings() {
    const params = useParams();
    const categoryId = typeof params.categoryId === 'string' ? parseInt(params.categoryId, 10) : 0;
    
    const [category, setCategory] = useState<any>(null);
    const [meetings, setMeetings] = useState<any[]>([]);
    const [newMeeting, setNewMeeting] = useState<boolean>(false);
    const [editingMeetingId, setEditingMeetingId] = useState<number | null>(null);
    const [meeting, setMeeting] = useState<{
        title: string;
        issuesLink: string;
        videoLink: string;
        notes: string;
        categoryId?: number | null;
    }>({
        title: "",
        issuesLink: "",
        videoLink: "",
        notes: "",
        categoryId: categoryId,
    });
    const { toast } = useToast();

    const fetchCategoryData = useCallback(async () => {
        if (categoryId) {
            try {
                const categoryData = await getMeetingCategory(categoryId);
                setCategory(categoryData);
                if (categoryData && categoryData.meetings) {
                    setMeetings(categoryData.meetings);
                }
            } catch (e) {
                toast({
                    title: 'Error fetching category data'
                });
            }
        }
    }, [categoryId, toast]);

    const deleteMeetingWithId = async (id: number) => {
        try {
            await deleteMeeting(id);
            toast({
                title: 'Meeting deleted'
            });
            fetchCategoryData();
        } catch (e) {
            toast({
                title: 'Something went wrong'
            });
        }
    };

    const addNewMeeting = async () => {
        try {
            if (!meeting.title || !meeting.issuesLink || !meeting.videoLink || !meeting.notes) {
                toast({
                    title: 'Please fill all fields'
                });
                return;
            }

            // Ensure the categoryId is set
            const meetingToAdd = {
                ...meeting,
                categoryId: categoryId
            };

            await addMeeting(meetingToAdd);
            fetchCategoryData();
            setNewMeeting(false);
            setMeeting({
                title: "",
                issuesLink: "",
                videoLink: "",
                notes: "",
                categoryId: categoryId,
            });
            toast({
                title: 'Meeting added'
            });
        } catch (e) {
            toast({
                title: 'Something went wrong'
            });
        }
    };

    useEffect(() => {
        fetchCategoryData();
    }, [categoryId, fetchCategoryData]);

    return (
        <>
            <PageContainer>
                <div className="flex items-center mb-4">
                    <Link href="/admin/meetings" className="mr-3">
                        <IoArrowBackOutline size={24} className="text-darkGray" />
                    </Link>
                    <Heading text={category ? `${category.name} Meetings` : 'Meetings'} />
                </div>
                
                <div className="border border-darkGray rounded-lg p-4 flex flex-col gap-4">
                    {/* Add new meeting button */}
                    <span
                        className={`${newMeeting ? "text-darkGray font-semibold" : "text-lightGray"} cursor-pointer`}
                        onClick={() => {
                            setNewMeeting(true);
                            setEditingMeetingId(null);
                            setMeeting({
                                title: "",
                                issuesLink: "",
                                videoLink: "",
                                notes: "",
                                categoryId: categoryId,
                            });
                        }}
                    >
                        + Add New Meeting
                    </span>

                    {/* List of meetings */}
                    {meetings && meetings.length > 0 ? (
                        <div className="flex flex-col gap-4">
                            {meetings.map((meetingItem) => (
                                <div key={meetingItem.id} className="flex items-center justify-between p-3 border border-lightGray rounded-lg">
                                    <div>
                                        <h3 className="text-darkGray font-medium">{meetingItem.title}</h3>
                                        <div className="flex mt-1 gap-x-4 text-sm">
                                            {meetingItem.issuesLink && (
                                                <a href={meetingItem.issuesLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                                    Issues
                                                </a>
                                            )}
                                            {meetingItem.videoLink && (
                                                <a href={meetingItem.videoLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                                    Video
                                                </a>
                                            )}
                                            {meetingItem.notes && (
                                                <a href={meetingItem.notes} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                                    Notes
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <span
                                        onClick={() => deleteMeetingWithId(meetingItem.id)}
                                        className="cursor-pointer text-darkGray hover:text-red-500"
                                    >
                                        <IoTrashBinOutline size={18} />
                                    </span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-lightGray italic">No meetings found in this category</p>
                    )}

                    {/* Form for adding/editing meeting */}
                    {newMeeting && (
                        <div className="flex flex-col gap-3 mt-4 p-4 bg-gray-50 rounded-lg">
                            <h3 className="font-medium text-darkGray">
                                Add New Meeting
                            </h3>
                            <input
                                type="text"
                                value={meeting.title}
                                onChange={(e) => {
                                    setMeeting({ ...meeting, title: e.target.value });
                                }}
                                placeholder="Meeting Title"
                                className="border border-lightGray focus:border-darkGray rounded-lg p-2 w-full"
                            />
                            <input
                                type="text"
                                value={meeting.issuesLink}
                                onChange={(e) => {
                                    setMeeting({ ...meeting, issuesLink: e.target.value });
                                }}
                                placeholder="Issues Link"
                                className="border border-lightGray focus:border-darkGray rounded-lg p-2 w-full"
                            />
                            <input
                                type="text"
                                value={meeting.videoLink}
                                onChange={(e) => {
                                    setMeeting({ ...meeting, videoLink: e.target.value });
                                }}
                                placeholder="Video Link"
                                className="border border-lightGray focus:border-darkGray rounded-lg p-2 w-full"
                            />
                            <input
                                type="text"
                                value={meeting.notes}
                                onChange={(e) => {
                                    setMeeting({ ...meeting, notes: e.target.value });
                                }}
                                placeholder="Notes Link"
                                className="border border-lightGray focus:border-darkGray rounded-lg p-2 w-full"
                            />

                            <div className="flex space-x-2">
                                <button
                                    onClick={addNewMeeting}
                                    className="bg-darkGray text-white rounded-lg px-4 py-2"
                                >
                                    Add Meeting
                                </button>
                                <button
                                    onClick={() => setNewMeeting(false)}
                                    className="bg-gray-200 text-darkGray rounded-lg px-4 py-2"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </PageContainer>
        </>
    );
}
