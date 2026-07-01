// Dependencies
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'

export default function Header() {
  return (
    <header>
      <Container sx={{ my: 2 }}>
        <Button variant="text" href="/">
          Home
        </Button>
        <Button variant="text" href="/themeTesting">
          Theme Testing
        </Button>
      </Container>
    </header>
  )
}
