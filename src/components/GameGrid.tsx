import React from "react";
import { SimpleGrid, Box, Spinner } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGame from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGame();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const fetchGamesCount = data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <Box padding="10px">
      {error && <p>{error.message}</p>}
      <InfiniteScroll
        dataLength={fetchGamesCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
          {isLoading &&
            skeleton.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => {
                return (
                  <GameCardContainer key={game.id}>
                    <GameCard game={game} />
                  </GameCardContainer>
                );
              })}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </Box>
  );
};

export default GameGrid;
