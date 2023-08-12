import { SimpleGrid, Image } from "@chakra-ui/react"
import useGameScreenShots from "../hooks/useGameScreenShots"

interface Props {
  gameId: number
}

const GameScreenShots = ({ gameId }: Props) => {
  const { data } = useGameScreenShots(gameId)
  console.log(data)
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map(screenShot => {
        return <Image borderRadius={10} src={screenShot.image} key={screenShot.id} />
      })}
    </SimpleGrid>
  )
}

export default GameScreenShots