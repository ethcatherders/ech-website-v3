import FeedbackCard from "./feedbackCard";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function FeedbackPreview(feedback: any) {
  return (
    <Dialog>
      <DialogTrigger>
        <span className="underline underline-offset-2">View</span>
      </DialogTrigger>
      <DialogContent>
        <div className="p-4">
          <FeedbackCard {...feedback} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
