import { Award, Heart, MapPin } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { businessInfo } from "../../data/businessInfo";

const highlights = [
  {
    icon: Heart,
    title: "One-to-one care",
    text: "Every dog gets a groomer's undivided attention.",
  },
  {
    icon: Award,
    title: "IPET Level 3 qualified",
    text:
      businessInfo.credential +
      ", reflecting a commitment to professional grooming.",
  },
  {
    icon: MapPin,
    title: "Local to Toddington",
    text: "A dedicated salon on the High Street, serving Toddington and the surrounding Bedfordshire area.",
  },
];

export default function About() {
  return (
    <Container className="grid items-center gap-14 grid-cols-2">
      <div className="order-2 grid grid-cols-2 gap-4">
        <img
          src="/images/shepherd-mix-rainbow-bandana.jpg"
          alt="Happy shepherd-mix dog with a neat trim, wearing a rainbow bandana at Charlotte's Soapy Pups"
          className="h-full w-full rounded-3xl"
        />
        <img
          src="/images/salon-interior.jpg"
          alt="Inside Charlotte's Soapy Pups grooming salon in Toddington"
          className="mt-10 h-full w-full rounded-3xl object-cover"
        />
      </div>

      <div className="order-1 flex flex-col gap-8">
        <SectionHeading
          id="about-heading"
          align="left"
          eyebrow="About the salon"
          title="A dedicated, one-to-one dog grooming salon"
          description="Charlotte's Soapy Pups is a dedicated one-to-one dog grooming salon located in Toddington, Bedfordshire. Every dog that visits receives the highest standard of care, and leaves happy, comfortable, and beautifully groomed."
        />

        <dl className="grid gap-6">
          {highlights.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-rose-500">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <dt className="font-semibold text-rose-800">{title}</dt>
                <dd>{text}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </Container>
  );
}
