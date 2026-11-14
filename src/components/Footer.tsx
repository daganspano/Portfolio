import Box from '@mui/material/Box'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MailIcon from '@mui/icons-material/Mail'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Fab from '@mui/material/Fab'

// "Dagan Spano" is ~4.97em wide in Anton, so dividing by 4.8 clips part of the last letter (cqw = footer width)
const nameFontSize =
  'clamp(48px, (100cqw - 32px) / 4.8, (1600px - 120px) / 4.8)'

export default function Footer() {
  const year = new Date().getFullYear()

  const websiteStackItems = [
    { color: '#0081A3', label: 'React' },
    { color: '#1976d2 ', label: 'Material UI' },
    { color: '#1a1a1a', label: 'TanStack' },
    { color: '#00ED64', label: 'MongoDB' },
    { color: '#F6821F', label: 'Cloudflare' },
  ]

  const links = [
    { href: 'https://github.com/daganspano', icon: GitHubIcon },
    { href: 'https://www.linkedin.com/in/daganspano', icon: LinkedInIcon },
    { href: 'mailto:daganspano@gmail.com', icon: MailIcon },
  ]

  return (
    <footer style={{ containerType: 'inline-size' }}>
      <Box
        sx={{
          bgcolor: 'background.paper',
          height: `clamp(375px, calc(${nameFontSize} * 1.85), 450px)`,
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            maxWidth: 1600,
            height: '100%',
            px: { xs: 4, sm: 4, md: 4, lg: 4, xl: 4 },
            mx: 'auto',
            position: 'relative',
          }}
        >
          <Stack
            sx={{
              gap: 4,
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              pt: 4,
            }}
          >
            {/* Website stack */}
            <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 2 }}>
              {websiteStackItems.map((item, index) => (
                <Stack
                  key={index}
                  direction="row"
                  sx={{
                    height: 40,
                    minWidth: 80,
                    bgcolor: 'white',
                    color: 'black',
                    gap: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 1,
                    borderRadius: 5,
                  }}
                >
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      bgcolor: item.color,
                      borderRadius: '50%',
                    }}
                  />
                  <Box>{item.label}</Box>
                </Stack>
              ))}
            </Stack>
            {/* Links */}
            <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 2 }}>
              {links.map(({ href, icon: Icon }, index) => (
                <Fab
                  key={index}
                  size="large"
                  href={href}
                  sx={{
                    color: 'primary.main',
                    bgcolor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'primary.main',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: 'primary.main',
                      color: 'background.paper',
                    },
                  }}
                >
                  <Icon fontSize="large" />
                </Fab>
              ))}
            </Stack>
          </Stack>
          {/* Copyright and large background name */}
          <Stack
            sx={{
              position: 'absolute',
              bottom: `calc(${nameFontSize} * -0.26)`,
              left: { xs: 32, sm: 32, md: 32, lg: 32, xl: 32 },
            }}
          >
            <Typography variant="body2">
              &copy; {year} Dagan Spano. All rights reserved.
            </Typography>
            <Typography
              variant="h1"
              sx={{
                width: 'auto',
                whiteSpace: 'nowrap',
                color: 'primary.main',
                fontFamily: 'Anton',
                fontSize: nameFontSize,
              }}
            >
              Dagan Spano
            </Typography>
          </Stack>
        </Box>
      </Box>
    </footer>
  )
}
