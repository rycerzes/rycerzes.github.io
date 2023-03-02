import ShortcutError from './ShortcutError'
import { Box } from './Box'

export default function ErrorMessage({ code }) {
  let title = '0'
  let description = "Something isn't right."

  if (code === 404) {
    title = 'error gremlin go brrrr'
    description = "This page doesn't exist."
  }
  else if (code === 500)
  {
    title = 'error gremlin strikes again'
    description = 'working on it ;)'
  }

  return (
    <Box css={{ textAlign: 'center' }}>
      <h1>{title}</h1>
      <ShortcutError />
      <p>{description}</p>
    </Box>
  )
}
