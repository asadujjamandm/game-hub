import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "../GameCard";
import GameCardSkeleton from "../GameCardSkeleton/GameCardSkeleton";
import GameCardContainer from "../GameCardContainer/GameCardContainer";
import Game from "../../models/Game";
import Genre from "../../models/Genre";
import useGames from "../../hooks/useGames";
import Platform from "../../models/Platform";
import GameQuery from "../../models/GameQuery";

interface Props {
  // selectedGenre: Genre | null;
  // platform: Platform | null;
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { datas, error, loading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding="10px"
      >
        {loading &&
          skeletons.map((item) => (
            <GameCardContainer key={item}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {datas.map((item) => (
          <>
            <GameCardContainer key={item.id}>
              <GameCard game_info={item} />
            </GameCardContainer>
          </>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
