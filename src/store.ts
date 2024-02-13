import { create } from "zustand";

type MemberStore = {
  editOpen: boolean;
  setEditOpen: () => void;
  addOpen: boolean;
  setAddOpen: () => void;
};

export const useMemberStore = create<MemberStore>((set) => {
  return {
    editOpen: false,
    setEditOpen: () => {
      set((state) => ({ editOpen: !state.editOpen }));
    },
    addOpen: false,
    setAddOpen: () => {
      set((state) => ({ addOpen: !state.addOpen }));
    },
  };
});
