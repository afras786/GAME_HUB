import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.png";
import meh from "../assets/meh.png";
import thumbsUp from "../assets/thumbs-up.jpeg";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const empjiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };
  if (rating < 3) return null;
  return <Image {...empjiMap[rating]} borderRadius="20px" marginTop={2} />;
};

export default Emoji;
