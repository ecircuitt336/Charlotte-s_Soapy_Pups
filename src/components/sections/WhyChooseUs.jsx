import { HeartHandshake, ShieldCheck, Sparkles, Clock } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const reasons = [
  {
    icon: HeartHandshake,
    title: "Genuine one-to-one attention",
    text: "Only one dog at a time and no rushed cage-drying.",
  },
  {
    icon: ShieldCheck,
    title: "Welfare-first policies",
    text: "Matted coats are clipped rather than painfully de-matted, in line with the Animal Welfare Act 2006.",
  },
  {
    icon: Sparkles,
    title: "Gentle, high-quality products",
    text: "Calming, skin-friendly shampoos and products.",
  },
  {
    icon: Clock,
    title: "Professional & reliable",
    text: "IPET Level 3 qualified, with clear policies on health, safety and hygiene.",
  },
];

export default function WhyChooseUs() {
  return (
      <Container className="flex flex-col gap-14">
        <SectionHeading
          id="why-us-heading"
          eyebrow="Why Choose Us"
          title="Dog Grooming should be a stress-free experience for both the dog and the owner"
        />

        <div className="grid gap-6 grid-cols-4">
          {reasons.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex flex-col gap-4"
            >
              <div className="flex h-11 w-11 items-center justify-center">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg">{title}</h3>
              <p className="text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </Container>
  );
}
