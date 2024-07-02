import { IUser } from "@/types/auth";
import { create } from "zustand";

interface IUserStore {
  user: IUser | null;
  token: string;
  updateUser: (user: IUser) => void;
}

const useUserStore = create<IUserStore>((set) => ({
  user: null,
  token: "",
  updateUser: (userData: IUser) =>
    set((state) => ({
      ...state,
      user: userData,
    })),
}));

export default useUserStore;
