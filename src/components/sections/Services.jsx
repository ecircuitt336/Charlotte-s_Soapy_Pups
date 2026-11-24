import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../cards/ServiceCard";
import { services } from "../../data/services";

export default function Services() {
  return (
    <Container className="flex flex-col gap-14">
        <SectionHeading
          id="services-heading"
          eyebrow="Our Grooming Services"
          title="Grooming tailored to your dog's coat"
          description="From breed-standard clips to hand-stripping."
        />

        <div className="grid gap-6 grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </Container>
  );
}
