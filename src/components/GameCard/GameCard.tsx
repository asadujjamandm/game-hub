import {
  Badge,
  Card,
  CardBody,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import Game from "../../models/Game";
import PlatformList from "../PlatformList/index";
import CriticScore from "../CriticsScore/CriticScore";
import getCroppedImageUrl from "../utils/image-url";
import Emoji from "../Emoji/Emoji";

interface Props {
  game_info: Game;
}

const GameCard = ({ game_info }: Props) => {
  return (
    <Card key={game_info.id}>
      <Image src={getCroppedImageUrl(game_info.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformList
            platforms={game_info.parent_platforms.map((x) => x.platform)}
          />
          <CriticScore score={game_info.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {game_info.name} <Emoji rating={game_info.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
