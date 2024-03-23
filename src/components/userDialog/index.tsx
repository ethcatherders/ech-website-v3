import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FaUserAlt } from "react-icons/fa";
import { getAllUsers, deleteUser, changeUserRole } from "@/lib/session";
import { useEffect, useState } from "react";
import { useToast } from "../ui/use-toast";
import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { IoTrashBinOutline } from "react-icons/io5";
import { Roles } from "@prisma/client";

export default function UserDialog() {
  const [users, setUsers] = useState<any[]>([]);
  const { toast } = useToast();
  useEffect(() => {
    async function fetchUsers() {
      const users = await getAllUsers();
      setUsers(users);
    }
    fetchUsers();
  }, []);

  async function updateUsersRole(email: string, role: Roles) {
    try {
      await changeUserRole(email, role);
      toast({
        title: "User role updated",
      });
      const users = await getAllUsers();
      setUsers(users);
    } catch (e) {
      toast({
        title: "Oh no! Something went wrong",
      });
    }
  }

  async function handleDeleteUser(email: string) {
    try {
      await deleteUser(email);
      toast({
        title: "User deleted",
      });
      getAllUsers().then((users) => {
        setUsers(users);
      });
    } catch (e) {
      toast({
        title: "Oh no! Something went wrong",
      });
    }
  }

  return (
    <Dialog>
      <DialogTrigger>
        <FaUserAlt
          size={40}
          className="text-white bg-darkGray p-2 rounded-lg hover:scale-110 duration-300"
        />
      </DialogTrigger>
      <DialogContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user: any, index: number) => {
              return (
                <TableRow key={index}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>
                    <Popover>
                      <PopoverTrigger>
                        <span className="border py-1 px-2 rounded-lg border-lightGray">
                          {user?.role.toUpperCase()}
                        </span>
                      </PopoverTrigger>
                      <PopoverContent>
                        <div className="flex flex-col gap-2">
                          <Button
                            variant="ghost"
                            onClick={() => {
                              updateUsersRole(user?.email, "OWNER");
                            }}
                            className="w-full"
                          >
                            OWNER
                          </Button>
                          <Button
                            variant="ghost"
                            onClick={() => {
                              updateUsersRole(user?.email, "ADMIN");
                            }}
                          >
                            ADMIN
                          </Button>
                          <Button
                            variant="ghost"
                            onClick={() => {
                              updateUsersRole(user?.email, "USER");
                            }}
                          >
                            USER
                          </Button>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                  <TableCell>
                    <span
                      onClick={() => {
                        handleDeleteUser(user?.email);
                      }}
                      className="flex justify-end cursor-pointer"
                    >
                      <IoTrashBinOutline size={20} />
                    </span>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
}
