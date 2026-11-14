import { createFileRoute } from '@tanstack/react-router'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import ImageCard from '#/components/ImageCard'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const projects: {
    name: string
    company: string
    link: string
    image?: string
  }[] = [
    {
      name: 'Hit Tracker',
      company: 'Personal',
      link: '/',
      image: 'images/tempImg.png',
    },
    { name: 'GuestPass', company: 'Wilson & Company', link: '/wilsonProjects' },
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
              <ImageCard
                name={project.name}
                company={project.company}
                image={project.image}
              />
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
