import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../zustand/gameStore";

// ! Use Zustand to avoid prop drilling
// interface Props {
//   gameQuery: GameQuery;
// }

const GameHeading = () => {
  const genreID = useGameQueryStore((s) => s.gameQuery.genreID);
  const platformID = useGameQueryStore((s) => s.gameQuery.platformID);

  const genre = useGenre(genreID);
  const platform = usePlatform(platformID);

  const heading = `
  ${platform?.name || ""} ${genre?.name || ""} Games
  `;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
