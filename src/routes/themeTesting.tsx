import { createFileRoute } from '@tanstack/react-router'
import {
  amber,
  blue,
  cyan,
  gray,
  green,
  indigo,
  orange,
  pink,
  purple,
  red,
  teal,
  yellow,
} from '@/constants/color'
import { type ColorPalette } from '@/constants/color'
import { useColorScheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import Fab from '@mui/material/Fab'
import Grid from '@mui/material/Grid'
import LightModeIcon from '@mui/icons-material/LightMode'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button, { type ButtonOwnProps } from '@mui/material/Button'

export const Route = createFileRoute('/themeTesting')({
  component: ThemeTesting,
})

function ThemeTesting() {
  const { mode, setMode } = useColorScheme()
  const colors: { name: string; color: ColorPalette }[] = [
    { name: 'Red', color: red },
    { name: 'Orange', color: orange },
    { name: 'Amber', color: amber },
    { name: 'Yellow', color: yellow },
    { name: 'Green', color: green },
    { name: 'Teal', color: teal },
    { name: 'Cyan', color: cyan },
    { name: 'Blue', color: blue },
    { name: 'Indigo', color: indigo },
    { name: 'Purple', color: purple },
    { name: 'Pink', color: pink },
    { name: 'Gray', color: gray },
  ]
  const colorNumbers = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

  const palletteOptions: ButtonOwnProps['color'][] = [
    'primary',
    'secondary',
    'success',
    'warning',
    'error',
    'info',
  ]
  return (
    <Container>
      <Typography variant="h1" sx={{ mt: 4, mb: 2 }}>
        Theme Testing
      </Typography>

      <Typography variant="body1">
        This page is for testing the theme toggle functionality. Click the
        button in the top right to switch between light and dark modes.
      </Typography>

      <Fab
        sx={{ position: 'fixed', top: 16, right: 16 }}
        onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
      >
        {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
      </Fab>

      <Typography variant="h2" sx={{ mt: 4, mb: 2 }}>
        Color Scheme
      </Typography>
      <Paper>
        <Grid container spacing={2}>
          {colors.map((color, index) => (
            <>
              <Grid key={index} size={12}>
                <Typography variant="h4">{color.name}</Typography>
              </Grid>
              {colorNumbers.map((num) => (
                <Grid key={num} size={1.2}>
                  <Box sx={{ width: 1, textAlign: 'center' }}>{num}</Box>
                  <Paper
                    sx={{
                      backgroundColor:
                        color.color[num as keyof typeof color.color],
                      color: `var(--color-primary-contrastText)`,
                      p: 2,
                      textAlign: 'center',
                    }}
                  />
                </Grid>
              ))}
            </>
          ))}
          <Grid size={12}>
            <Typography variant="h2">Buttons</Typography>
          </Grid>
          {palletteOptions.map((pallette) =>
            (
              ['contained', 'outlined', 'text'] as ButtonOwnProps['variant'][]
            ).map((variant) => (
              <Grid size={4}>
                <Button color={pallette} fullWidth variant={variant}>
                  {pallette}
                </Button>
              </Grid>
            )),
          )}
        </Grid>
      </Paper>
    </Container>
  )
}
