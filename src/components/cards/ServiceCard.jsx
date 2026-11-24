import { Scissors, Sparkles, Hand, Droplets } from "lucide-react";

const ICONS = { Scissors, Sparkles, Hand, Droplets };

export default function ServiceCard({ title, description, icon }) {
  const Icon = ICONS[icon] ?? Sparkles;

  return (
    <div className="flex h-full gap-4 rounded-3xl">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-rose-700">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
