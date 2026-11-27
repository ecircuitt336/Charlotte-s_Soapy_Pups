import { Quote } from "lucide-react";

export default function TestimonialCard({ quote, author, detail }) {
  return (
    <figure className="flex h-full flex-col gap-6 rounded-3xl bg-white p-8">
      <Quote className="h-8 w-8 text-gold-600" />
      <blockquote className="text-lg">
        "{quote}"
      </blockquote>
      <figcaption className="text-sm font-semibold text-rose-900">
        {author}
        {detail ? <span className="block font-normal">{detail}</span> : null}
      </figcaption>
    </figure>
  );
}
