import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  GridItem,
  HStack,
  Show,
  space,
  Text,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector/PlatformSelector";
import GameQuery from "./models/GameQuery";
import SortSelector from "./components/SortSelector/SortSelector";

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const [heading, setHeading] = useState<string | null | undefined>("");

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) =>
            setGameQuery({ ...gameQuery, searchText: searchText })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenreList
            onSelectedGenre={(genre) => {
              setGameQuery({ ...gameQuery, genre });
              setHeading(genre?.name);
            }}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <Text fontSize={30}>{heading} Games</Text>
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector
                onSelectPlatform={(platform) => {
                  setGameQuery({ ...gameQuery, platform });
                  setHeading(platform?.name);
                }}
              />
            </Box>
            <SortSelector
              selectSort={(sortBy) =>
                setGameQuery({ ...gameQuery, orderBy: sortBy })
              }
            />
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
