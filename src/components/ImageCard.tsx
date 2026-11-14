import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export default function ImageCard({
  name,
  company,
  image,
}: {
  name: string
  company: string
  image?: string
}) {
  return (
    <Card
      sx={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 300,
        display: 'flex',
        alignItems: 'flex-end',
        p: 0,
        borderRadius: 2,
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <Stack
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          p: 1.5,
          width: '100%',
        }}
      >
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2">{company}</Typography>
      </Stack>
    </Card>
  )
}
