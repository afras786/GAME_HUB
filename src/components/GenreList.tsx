import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenre from "../hooks/useGenres";
import { getCropedImage } from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const setGenreId = useGameQueryStore(s => s.setGenreId)
  const selectedGenre = useGameQueryStore(s => s.gameQuery.genreId)
  const { data, isLoading, error } = useGenre();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results?.map((genre) => (
          <ListItem key={genre.id}>
            <HStack paddingY="10px">
              <Image
                src={getCropedImage(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
              />
              <Button
                onClick={() => setGenreId(genre.id)}
                variant="link"
                fontSize="lg"
                fontWeight={genre.id === selectedGenre ? "bold" : "normal"}
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
