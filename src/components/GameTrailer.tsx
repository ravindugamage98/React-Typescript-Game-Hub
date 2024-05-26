import useTrailers from "../hooks/useTrailers";

interface Props {
  gameID: number;
}

const GameTrailer = ({ gameID }: Props) => {
  const { data, error, isLoading } = useTrailers(gameID);

  if (isLoading) return null;

  //* React Router will catch it and show the error in error page
  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <video 
    src={first.data[480]} 
    poster={first.preview} 
    controls />
  ) : null;
};

export default GameTrailer;
