import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import MemberCard from "../memberCard/page";

export default function MemberPreview(member: any) {
  return (
    <Dialog>
      <DialogTrigger className="underline underline-offset-2">
        Preview
      </DialogTrigger>
      <DialogContent>
        <div className="p-2">
          <MemberCard {...member} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
