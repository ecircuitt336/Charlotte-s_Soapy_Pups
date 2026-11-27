import { Link } from "react-router-dom";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { pricingData } from "../../data/pricingData";

const preview = pricingData.slice(0, 8);

export default function PricingPreview() {
  return (
    <Container className="flex flex-col items-center gap-12">
      <SectionHeading
        id="pricing-preview-heading"
        eyebrow="Pricing"
        title="Breed-specific pricing, clearly laid out"
        description="A sample of our grooming prices below. See the full breed list on the pricing page. These are starting prices and may vary depending on the condition of your dog's size and temperament."
      />

      <div className="grid w-full rounded-3xl bg-white p-8">
        {preview.map((item) => (
          <div
            key={item.breed}
            className="flex items-center justify-between gap-4 border-b border-rose-100 py-3"
          >
            <span>{item.breed}</span>
            <span className="font-semibold text-rose-800">{item.price}</span>
          </div>
        ))}
      </div>

      <Button as={Link} to="/prices" size="lg">
        View Full Price List
      </Button>
    </Container>
  );
}
