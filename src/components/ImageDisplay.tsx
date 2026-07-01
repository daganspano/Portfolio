import Box from '@mui/material/Box'
import { useState } from 'react'
import RadioGroup from '@mui/material/RadioGroup'
import Radio from '@mui/material/Radio'
import FormControlLabel from '@mui/material/FormControlLabel'
import Button from '@mui/material/Button'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import Stack from '@mui/material/Stack'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'

export default function ImageDisplay({ imageUrls }: { imageUrls: string[] }) {
  const [index, setIndex] = useState(0)

  return (
    <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
      <Stack
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'rgba(0, 0, 0, 0.5)',
          height: { xs: 300, sm: 400, md: 500, lg: 600, xl: 700 },
        }}
      >
        <img
          src={imageUrls[index]}
          alt={`Image ${index + 1}`}
          style={{ maxWidth: '100%', height: '100%' }}
        />
      </Stack>

      {/* Navigation Controls */}
      <Stack
        direction="row"
        sx={{
          bgcolor: 'rgba(0, 0, 0, 0.2)',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          py: 2,
          position: 'absolute',
          bottom: 0,
        }}
      >
        <Button
          onClick={() =>
            setIndex((prev) => (prev - 1 < 0 ? imageUrls.length - 1 : prev - 1))
          }
          variant="text"
        >
          <NavigateBeforeIcon />
        </Button>
        <RadioGroup
          row
          defaultValue={0}
          value={index}
          onChange={(e) => setIndex(Number(e.target.value))}
        >
          {imageUrls.map((_, i) => (
            <FormControlLabel
              key={i}
              value={i}
              control={<Radio />}
              label={null}
            />
          ))}
        </RadioGroup>
        <Button
          onClick={() =>
            setIndex((prev) => (prev + 1 < imageUrls.length ? prev + 1 : 0))
          }
          variant="text"
          sx={{ ml: -3 }}
        >
          <NavigateNextIcon />
        </Button>
      </Stack>
    </div>
  )
}
