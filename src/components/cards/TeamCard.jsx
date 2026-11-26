import { PawPrint } from "lucide-react";

export default function TeamCard({ name, role, bio }) {
  return (
    <div className="flex flex-col items-center gap-5 rounded-3xl bg-white p-10 text-center ring-1 ring-rose-300">
      <div
        className="flex h-20 w-20 items-center justify-center rounded-full bg-rose-500 text-white"
      >
        <PawPrint className="h-9 w-9" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl">{name}</h3>
        <p className="text-sm font-semibold uppercase text-gold-600">{role}</p>
        <p>{bio}</p>
      </div>
    </div>
  );
}
