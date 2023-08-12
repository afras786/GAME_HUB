import { useRouteError, isRouteErrorResponse } from 'react-router-dom'
import { Box, Text, Heading } from '@chakra-ui/react'
import NavBar from '../components/NavBar'

const Errors = () => {
  const error = useRouteError()
  return (
    <Box padding={2}>
      <NavBar />
      <Heading marginY={1} marginX={1}>Oops!</Heading>
      <Text>{isRouteErrorResponse(error) ? "This page does not exist." : "Unexpeted Error."}</Text>
    </Box>
  )
}

export default Errors