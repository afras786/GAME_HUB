import { SimpleGrid, Box, Text } from '@chakra-ui/react'
import CriticScore from './CriticScore'
import DefinitionItem from './DefinitionItem'
import { Games } from '../entities/Games'

interface Props {
  game: Games
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} spacing={6} marginTop={5} as="dl">
      <Box>
        <DefinitionItem term="Platforms">
          {game.parent_platforms.map(({ platform }) => <Text key={platform.id}>{platform.name}</Text>)}
        </DefinitionItem>
      </Box>
      <Box>
        <DefinitionItem term='Metascore'>
          <CriticScore score={game.metacritic} />
        </DefinitionItem>
      </Box>
      <Box>
        <DefinitionItem term='Genres'>
          {game.genres.map(genre => <Text key={genre.id}>{genre.name}</Text>)}
        </DefinitionItem>
      </Box>
      <Box>
        <DefinitionItem term='Publishers'>
          {game.publishers.map(publisher => <Text key={publisher.id}>{publisher.name}</Text>)}
        </DefinitionItem>
      </Box>
    </SimpleGrid>
  )
}

export default GameAttributes