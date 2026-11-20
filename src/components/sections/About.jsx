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
    <Container>
      <div>
        <img
          src="/images/shepherd-mix-rainbow-bandana.jpg"
          alt="Happy shepherd-mix dog with a neat trim, wearing a rainbow bandana at Charlotte's Soapy Pups"
        />
        <img
          src="/images/salon-interior.jpg"
          alt="Inside Charlotte's Soapy Pups grooming salon in Toddington"
        />
      </div>

      <div>
        <SectionHeading
          id="about-heading"
          align="left"
          eyebrow="About the salon"
          title="A dedicated, one-to-one dog grooming salon"
          description="Charlotte's Soapy Pups is a dedicated one-to-one dog grooming salon located in Toddington, Bedfordshire. Every dog that visits receives the highest standard of care, and leaves happy, comfortable, and beautifully groomed."
        />

        <dl>
          {highlights.map(({ icon: Icon, title, text }) => (
            <div key={title}>
              <div>
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <dt>{title}</dt>
                <dd>{text}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </Container>
  );
}
