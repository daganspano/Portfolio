import { createFileRoute } from '@tanstack/react-router'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const projects: { name: string; link: string }[] = [
    { name: 'Hit Tracker - Personal', link: '/' },
    { name: 'Wilson & Company Projects', link: '/wilsonProjects' },
  ]

  return (
    <Container>
      <Typography variant="h1" sx={{ mb: 2 }}>
        Dagan Spano
      </Typography>

      <Paper sx={{ mb: 2, p: 2 }}>
        <Typography variant="body1">
          Welcome to my portfolio... ...blah blah blah...
        </Typography>
      </Paper>

      <Typography variant="h2" sx={{ my: 2 }}>
        My Projects
      </Typography>

      <Grid container spacing={2}>
        {projects.map((project) => (
          <Grid size={{ xs: 12, md: 4 }}>
            <a href={project.link} style={{ textDecoration: 'none' }}>
              <Card>{project.name}</Card>
            </a>
          </Grid>
        ))}

        <Button
          onClick={() => alert('Reviewing is under construction')}
          fullWidth
        >
          Leave a Review
        </Button>
      </Grid>
    </Container>
  )
}
