import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { galleryImages } from "../../data/galleryImages";

export default function Gallery() {
  return (
    <Container className="flex flex-col gap-14">
      <SectionHeading
        id="gallery-heading"
        eyebrow="Gallery"
        title="Recent grooms from the salon"
        description="A few of the dogs who've left looking (and feeling) their best."
      />

      <div className="grid gap-4 grid-cols-4">
        {galleryImages.map((image, index) => (
          <div
            key={image.src}
            className="group aspect-square overflow-hidden rounded-2xl"
          >
            <img
              src={image.src}
              alt={image.alt}
              width="700"
              height="700"
              className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </Container>
  );
}
