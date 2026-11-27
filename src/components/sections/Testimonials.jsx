import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import TestimonialCard from "../cards/TestimonialCard";
import { testimonials } from "../../data/testimonialsData";

export default function Testimonials() {
  return (
    <Container className="flex flex-col gap-14">
      <SectionHeading
        id="testimonials-heading"
        eyebrow="Customer Reviews"
        title="Trusted by dogs and owners across Bedfordshire"
      />

      <div className="grid grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.author} {...testimonial} />
        ))}
      </div>
    </Container>
  );
}
