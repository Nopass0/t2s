"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type SessionRole = "ADMIN" | "DM" | "EMPLOYEE" | "INTERN";

export type SessionPayload = {
  userId: string;
  pointId: string;
  role: SessionRole;
  name: string;
  code: string;
  pointName: string;
  pointAddress: string;
};

type AuthStore = {
  pointCode: string;
  session: SessionPayload | null;
  setPointCode: (value: string) => void;
  clearPointCode: () => void;
  setSession: (session: SessionPayload | null) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      pointCode: "",
      session: null,
      setPointCode: (value) => set({ pointCode: value }),
      clearPointCode: () => set({ pointCode: "" }),
      setSession: (session) => set({ session }),
      logout: () => set({ session: null }),
    }),
    {
      name: "t2s-auth",
      partialize: (state) => ({
        pointCode: state.pointCode,
        session: state.session,
      }),
    },
  ),
);
