import GridImage from '#/components/GridImage'
import ImageDisplay from '#/components/ImageDisplay'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/wilsonProjects')({
  component: WilsonProjects,
})

function WilsonProjects() {
  return (
    <Container>
      <Typography variant="h1" sx={{ mb: 2 }}>
        Wilson & Company Projects
      </Typography>

      <Paper>
        <Box sx={{ mb: 2 }}>
          The following are the projects I worked on for Wilson & Company.
        </Box>

        <div>
          Unfortunately, I am not able to provide the actual projects, as they
          are internal websites, widgets, and components.
        </div>
      </Paper>

      <Typography variant="h2" sx={{ mt: 4, mb: 2 }}>
        Guest Pass
      </Typography>

      <Paper>
        <ImageDisplay
          imageUrls={[
            '/images/tempImg.png',
            '/images/tempImg2.webp',
            '/images/tempImg.png',
          ]}
        />

        <Box sx={{ mt: 2 }}>[description]</Box>

        <ul>
          <li>Created UI</li>
          <li>Created dark mode theming used for all projects</li>
          <li>Created some backend...</li>
          <li>...</li>
        </ul>
      </Paper>

      <Typography variant="h2" sx={{ mt: 4, mb: 2 }}>
        DataGrid
      </Typography>

      <Paper>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <GridImage
            src="/images/tempImg.png"
            alt="DataGrid Table View"
            caption="Table View"
          />
          <GridImage
            src="/images/tempImg.png"
            alt="DataGrid List View"
            caption="List View"
          />
        </Grid>

        <div>[description]</div>

        <ul>
          <li>Created List View</li>
          <li>Created Settings Persistence</li>
          <li>...</li>
        </ul>
      </Paper>
    </Container>
  )
}
