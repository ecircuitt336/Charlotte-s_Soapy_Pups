import { Award, Users } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { businessInfo } from "../../data/businessInfo";

export default function Hero() {
  return (
    <section className="bg-rose-100 pb-15 pt-12 sm:pt-16">
      <Container className="grid gap-6">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-rose-500">
            <Award className="h-4 w-4" />
            IPET Level 3 Certified Groomer
          </span>

          <h1 className="text-balance text-5xl">
            Calm one-to-one dog grooming in Toddington
          </h1>

          <p className="max-w-xl text-lg">
            Charlotte's Soapy Pups gives every dog a groomer's full attention.
            We use gentle products every time.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button as="a" href="#contact">
              Book an Appointment
            </Button>
            <Button
              as="a"
              href={`tel:${businessInfo.groomingPhone}`}
            >
              Call {businessInfo.groomingPhoneDisplay}
            </Button>
          </div>

          <div className="flex gap-3 text-sm">
            <Users className="h-5 w-5 text-rose-500" />
            Every appointment is one-to-one, meaning one dog and one groomer so
            there is no rushing.
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2.5em]">
            <img
              src="/images/poodle-orange-bandana.jpg"
              alt="Freshly groomed apricot Poodle wearing an orange bandana at Charlotte's Soapy Pups"
            />
            <div className="absolute -bottom-6 -left-6 w-48 rounded-2xl bg-rose-200 p-4">
              <p className="text-2xl text-rose-800">42+</p>
              <p className="text-sm">
                Breed groomed with a tailored style
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
