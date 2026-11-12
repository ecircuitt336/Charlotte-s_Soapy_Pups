import { Award, Users } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { businessInfo } from "../../data/businessInfo";

export default function Hero() {
    return (
        <section>
            <Container>
                <div>
                    <span>
                        <Award />
                        IPET Level 3 Certified Groomer
                    </span>

                    <h1>
                        Calm one-to-one dog grooming in Toddington
                    </h1>

                    <p>
                        Charlotte's Soapy Pups gives every dog a groomer's full attention. We use gentle products every time.
                    </p>

                    <div>
                        <Button>
                            Book an Appointment
                        </Button>
                        <Button
                        as="a"
                        href={`tel:${businessInfo.groomingPhone}`}
                        variant="secondary"
                        size="lg"
                        >
                            Call {businessInfo.groomingPhoneDisplay}
                        </Button>
                    </div>

                    <div>
                        <Users />
                        Every appointment is one-to-one, meaning one dog and one groomer so there is no rushing.
                    </div>
                </div>

                <div>
                    <div>
                        <img src="/images/poodle-orange-bandana.jpg" alt="Freshly groomed apricot Poodle wearing an orange bandana at Charlotte's Soapy Pups" width="350" height="467" fetchPriority="high" />
                        <div>
                            <p>42+</p>
                            <p>Breed groomed with a tailored style</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}