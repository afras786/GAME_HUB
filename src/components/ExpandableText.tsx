import { useState } from 'react'
import { Text, Button } from "@chakra-ui/react"

interface Props {
  children: string
}

const ExpandableText = ({ children }: Props) => {
  const [expandable, setExpandable] = useState(true)
  const limit = 300;
  const summary = expandable ? children.substring(0, limit) + "..." : children
  if (children.length <= 300) return <Text>{children}</Text>
  return (
    <>
      <Text>{summary}
        <Button
          onClick={() => setExpandable(!expandable)}
          marginX={1}
          colorScheme='yellow'
          size="xs"
        >
          {expandable ? "Show More" : "Show Less"}
        </Button>
      </Text>
    </>
  )
}

export default ExpandableText