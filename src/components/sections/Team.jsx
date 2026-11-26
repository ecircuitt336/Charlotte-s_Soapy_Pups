import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import TeamCard from "../cards/TeamCard";
import { businessInfo } from "../../data/businessInfo";

export default function Team() {
  return (
    <Container className="flex flex-col items-center gap-14">
      <SectionHeading
        id="team-heading"
        eyebrow="Meet Your Groomer"
        title="A dedicated, qualified groomer for every appointment"
        description="As a one-to-one salon, your dog is groomed by the same experienced hands from start to finish."
      />

      <div className="w-full max-w-2xl">
        <TeamCard
          name="Charlotte"
          role="Owner & Dog Groomer"
          bio={`${businessInfo.credential}. Charlotte founded the salon to give every dog the calm, unhurried grooming experience they deserve, right here in Toddington.`}
        />
      </div>
    </Container>
  );
}
