"use client";
import { testStore } from "@/store/testStore";

export default function Test() {
  const user = testStore((state) => state.user);
  const updtUser = testStore((state) => state.updateUser);
  return (
    <>
      <h1>coucou {user.name}</h1>

      <input
        type="text"
        onChange={(e) => updtUser(e.target.value)}
        className="bg-slate-400"
      />
    </>
  );
}
