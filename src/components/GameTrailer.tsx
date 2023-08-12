import useTrailers from "../hooks/useTrailters"

interface Props {
  gameId: number
}

const GameTrailer = ({ gameId }: Props) => {
  const { data } = useTrailers(gameId)
  const first = data?.results[0]
  return first ? <video style={{ marginBottom: '10px' }} src={first.data[480]} poster={first.preview} controls /> : null
}

export default GameTrailer