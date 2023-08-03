import { Box, Heading, Spinner, SimpleGrid } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import ExpandableText from '../components/ExpandableText'
import GameAttributes from '../components/GameAttributes'
import useGame from '../hooks/useGame'
import GameTrailer from '../components/GameTrailer'
import GameScreenShots from '../components/GameScreenShots'

const GameDetailPage = () => {
  const { slug } = useParams()
  const { data: game, error, isLoading } = useGame(slug || "")
  if (isLoading) return <Spinner />
  if (error || !game) return <h1>{error.message}</h1>

  return (
    <Box padding={5}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={7}>
        <Box>
          <Heading marginBottom={2}>{game.name}</Heading>
          <ExpandableText children={game.description_raw} />
          <GameAttributes game={game} />
        </Box>
        <Box>
          <GameTrailer gameId={game.id} />
          <GameScreenShots gameId={game.id} />
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export default GameDetailPage