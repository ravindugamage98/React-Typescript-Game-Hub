import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";

const emojieMap: { [key: number]: ImageProps } = {
  3: { src: meh, alt: "meh", boxSize: "25px" },
  4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
  5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
};

interface Props {
  rating: number;
}

const Emojie = ({ rating }: Props) => {
  if (rating < 3) return null;

  return <Image {...emojieMap[rating]} marginTop={1} />;
};

export default Emojie;
