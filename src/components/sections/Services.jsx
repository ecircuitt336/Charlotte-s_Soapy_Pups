import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../cards/ServiceCard";
import { services } from "../../data/services";

export default function Services() {
  return (
    <Container>
      <SectionHeading
        id="services-heading"
        eyebrow="Our Grooming Services"
        title="Grooming tailored to your dog's coat"
        description="Every service starts with a calm, gentle wash and finishes with a style suited to your dog."
      />

      <div>
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </Container>
  );
}
