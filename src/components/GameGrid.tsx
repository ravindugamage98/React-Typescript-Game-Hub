import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

// ! Use Zustand to avoid prop drilling
// interface Props {
//   gameQuery: GameQuery;
// }
const GameGrid = () => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } =
    useGames();
    // gameQuery
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  if (error) return <Text>{error.message}</Text>;

  // Function to calculate total games(results)
  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    // <Box padding="10px">

    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage} // convert it to a boolean
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
        {/* {data?.results.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))} */}
      </SimpleGrid>
    </InfiniteScroll>

    //   {/* USED FOR INFINITE QUERIES
    //   {hasNextPage && (
    //     <Button onClick={() => fetchNextPage()} marginY={5}>
    //       {isFetchingNextPage ? "Loading..." : "Load More..."}
    //     </Button>
    //   )} */}
    // {/* </Box> */}
  );
};

export default GameGrid;
