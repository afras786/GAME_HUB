import { Card, CardBody, Image, Heading, HStack } from "@chakra-ui/react";
import { Games } from "../entities/Games";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import { getCropedImage } from "../services/image-url";
import { Link } from "react-router-dom";

interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Link to={`games/${game.slug}`}>
        <Image src={getCropedImage(game.background_image)} />
      </Link>
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platform={game.parent_platforms.map(({ platform }) => platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={`games/${game.slug}`}>{game.name}</Link>
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
