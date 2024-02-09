import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { MdFeedback } from "react-icons/md";
import {
  getAllFeedbacks,
  toggleFeedbackPublish,
  deleteFeedback,
} from "@/app/_action";
import { useToast } from "../ui/use-toast";
import { useEffect, useState } from "react";
import FeedbackPreview from "./feedbackPreview";
import { ArrowUpIcon, ArrowDownIcon } from "@radix-ui/react-icons";
import { IoTrashBinOutline } from "react-icons/io5";

export default function FeedbackAdmin() {
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    async function fetchFeedbacks() {
      const feedbacks = await getAllFeedbacks();
      setFeedbacks(feedbacks);
    }
    fetchFeedbacks();
  }, []);

  const { toast } = useToast();

  function handleTogglePublish(id: number) {
    try {
      toggleFeedbackPublish(id);
      toast({
        title: "Feedback state changed successfully!",
      });
      getAllFeedbacks().then((feedbacks) => setFeedbacks(feedbacks));
    } catch (e) {
      toast({
        title: "Oh no! Something went wrong!",
      });
    }
  }

  function handleDeleteFeedback(id: number) {
    try {
      deleteFeedback(id);
      toast({
        title: "Feedback deleted successfully!",
      });
      getAllFeedbacks().then((feedbacks) => setFeedbacks(feedbacks));
    } catch (e) {
      toast({
        title: "Oh no! Something went wrong!",
      });
    }
  }

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <MdFeedback
            size={40}
            className="text-white bg-darkGray p-2 rounded-lg hover:scale-110 duration-300"
          />
        </DialogTrigger>
        <DialogContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Preview</TableHead>
                <TableHead>Visibility</TableHead>
                <TableHead>Delete</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {feedbacks?.map((feedback: any, index: number) => {
                return (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      {feedback.name}
                    </TableCell>
                    <TableCell>
                      <FeedbackPreview {...feedback} />
                    </TableCell>
                    <TableCell>
                      <button
                        className={`${
                          feedback.approved ? "bg-red-500" : "bg-green-500"
                        } p-2 rounded-lg justify-center items-center flex w-full`}
                        onClick={() => handleTogglePublish(feedback.id)}
                      >
                        {feedback.approved ? (
                          <ArrowDownIcon />
                        ) : (
                          <ArrowUpIcon />
                        )}
                      </button>
                    </TableCell>
                    <TableCell>
                      <span
                        onClick={() => {
                          handleDeleteFeedback(feedback.id);
                        }}
                        className="justify-center items-center flex cursor-pointer"
                      >
                        <IoTrashBinOutline />
                      </span>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </DialogContent>
      </Dialog>
    </>
  );
}
