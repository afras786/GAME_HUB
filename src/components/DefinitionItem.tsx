import { ReactNode } from 'react'
import { Heading } from '@chakra-ui/react'

interface Props {
  term: string;
  children: ReactNode | ReactNode[]
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <>
      <Heading as="dt" size="md" color="gray.600" marginBottom={2}>{term}</Heading>
      <dd>{children}</dd>
    </>
  )
}

export default DefinitionItem