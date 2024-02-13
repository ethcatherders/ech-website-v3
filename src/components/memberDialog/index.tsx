import { RiTeamFill } from "react-icons/ri";
import { IoTrashBinOutline } from "react-icons/io5";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllMembers, deleteMember, updateMemberRole } from "@/app/_action";
import { useState, useEffect } from "react";
import MemberPreview from "./memberPreview";
import AddMember from "./addMember";
import { Cross2Icon } from "@radix-ui/react-icons";
import EditMember from "./editMember";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { useMemberStore } from "@/store";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function MemberDialog() {
  const [members, setMembers] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const addOpen = useMemberStore((state) => state.addOpen);
  const editOpen = useMemberStore((state) => state.editOpen);
  const { toast } = useToast();
  useEffect(() => {
    async function fetchMembers() {
      const members = await getAllMembers();
      setMembers(members);
    }
    fetchMembers();
  }, [open, addOpen, editOpen]);
  return (
    <>
      <span
        onClick={() => {
          setOpen(true);
        }}
      >
        <RiTeamFill
          size={40}
          className="text-white bg-darkGray p-2 rounded-lg hover:scale-110 duration-300"
        />
      </span>

      {open && (
        <>
          <div className="fixed inset-0 z-50 bg-black/80">
            <div className="fixed left-[50%] top-[50%] z-50 grid w-full rounded-md max-w-lg translate-x-[-50%] p-4 translate-y-[-50%] gap-4 border bg-white">
              <span
                className="absolute top-4 right-4 text-lightGray cursor-pointer hover:border border-darkGray rounded-md duration-300 p-[0.1rem]"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <Cross2Icon />
              </span>
              <div className="flex flex-col gap-6">
                <AddMember />
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Preview</TableHead>
                      <TableHead>Edit</TableHead>
                      <TableHead>Delete</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {members?.map((member: any, index: number) => {
                      return (
                        <TableRow key={index}>
                          <TableCell>{member.name}</TableCell>
                          <TableCell>
                            <Popover>
                              <PopoverTrigger>
                                <Button variant="outline">
                                  {member?.role.toUpperCase()}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent>
                                <div className="flex flex-col gap-2">
                                  <Button
                                    variant="ghost"
                                    onClick={async () => {
                                      await updateMemberRole(
                                        member?.id,
                                        "active"
                                      );
                                      toast({
                                        title:
                                          "Member role updated to 'ACTIVE'",
                                      });
                                      getAllMembers().then((members) => {
                                        setMembers(members);
                                      });
                                    }}
                                    className="w-full"
                                  >
                                    ACTIVE
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    onClick={async () => {
                                      await updateMemberRole(
                                        member?.id,
                                        "emeritus"
                                      );
                                      toast({
                                        title:
                                          "Member role updated to 'EMERITUS'",
                                      });
                                      getAllMembers().then((members) => {
                                        setMembers(members);
                                      });
                                    }}
                                  >
                                    EMERITUS
                                  </Button>
                                </div>
                              </PopoverContent>
                            </Popover>
                          </TableCell>
                          <TableCell>
                            <MemberPreview {...member} />
                          </TableCell>
                          <TableCell>
                            <EditMember {...member} />
                          </TableCell>
                          <TableCell>
                            <span
                              onClick={async () => {
                                await deleteMember(member.id);
                                toast({ title: "Member deleted" });
                                getAllMembers().then((members) => {
                                  setMembers(members);
                                });
                              }}
                              className="cursor-pointer"
                            >
                              <IoTrashBinOutline />
                            </span>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
