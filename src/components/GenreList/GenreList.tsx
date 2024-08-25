import useData from "../../hooks/useData";
import Genre from "../../models/Genre";
import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../utils/image-url";
import GenreListSkeleton from "../GenreListSkeleton/GenreListSkeleton";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { datas, error, loading } = useData<Genre>("/genres", []);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {loading && skeletons.map((item) => <GenreListSkeleton key={item} />)}
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {datas.map((item) => (
          <ListItem key={item.id} padding="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius="8px"
                objectFit="cover"
                src={getCroppedImageUrl(item.image_background)}
              />
              <Button
                onClick={() => onSelectedGenre(item)}
                fontSize="lg"
                variant="link"
                whiteSpace="normal"
                textAlign="left"
                fontWeight={item.id === selectedGenre?.id ? "bold" : "normal"}
              >
                {item.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
