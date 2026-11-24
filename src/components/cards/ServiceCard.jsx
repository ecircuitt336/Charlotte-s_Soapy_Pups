import { Scissors, Sparkles, Hand, Droplets } from "lucide-react";

const ICONS = { Scissors, Sparkles, Hand, Droplets };

export default function ServiceCard({ title, description, icon }) {
  const Icon = ICONS[icon] ?? Sparkles;

  return (
    <div>
      <div>
        <Icon className="h-6 w-6"/>
      </div>
      <h3 className="text-xl">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
