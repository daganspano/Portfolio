import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <Container sx={{ my: 4 }}>
        <Typography variant="body2" align="center">
          &copy; {year} Dagan Spano. All rights reserved.
        </Typography>
      </Container>
    </footer>
  )
}
