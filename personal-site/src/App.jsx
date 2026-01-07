import React from 'react'
import { AppBar, Stack, Box, Container, Typography, ThemeProvider, Toolbar, Tooltip, IconButton, 
  List, ListItem, ListItemIcon, ListItemText, ListItemAvatar, Avatar, Link, Divider,
  CssBaseline} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import MarketboxLogo from './assets/marketboxlogo.jpg'
import OrbitalLogo from './assets/uworbitallogo.jpeg'
import WaterlooLogo from './assets/waterloologo.png'
import theme from './theme'; 

function App() {

  function BulletPoint() {
    return <ShortcutIcon sx={{transform: "scaleY(-1)"}} />
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Box sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Container maxWidth="sm">
          <AppBar position='static' color="transparent" elevation={0}>
            <Toolbar disableGutters sx={{justifyContent: 'space-between'}}>
              <Typography fontWeight="bold">Krishna Jawale</Typography>
              <Stack direction="row">
                <Tooltip title="Github">
                  <IconButton
                    color="inherit"
                    component="a"
                    target='_blank'
                    href="https://github.com/KrishnaJawale"
                    size="small"
                  >
                    <GitHubIcon/>
                  </IconButton>
                </Tooltip>
                <Tooltip title="LinkedIn">
                  <IconButton
                    color="inherit"
                    component="a"
                    target='_blank'
                    href="https://www.linkedin.com/in/krishnajawale/"
                    size="small"
                  >
                    <LinkedInIcon/>
                  </IconButton>
                </Tooltip>
                <Tooltip title="Email">
                  <IconButton
                    color="inherit"
                    component="a"
                    target='_blank'
                    href="mailto:krishnajawale7@gmail.com"
                    size="small">

                    <EmailIcon/>
                  </IconButton>
                </Tooltip>
              </Stack>
            </Toolbar>
          </AppBar>
          <Divider/>
          <Stack sx={{mt: 3}}>
            <List sx={{ listStyleType: "disc", pl: 2 }}>
              <ListItem sx={{ display: "list-item", py: 0, px: 0}}>
                <ListItemText>
                  <Typography gutterBottom>studying mathematics @{' '}
                    <Box
                      component="img"
                      src={WaterlooLogo}
                      sx={{
                        display: 'inline-block',
                        verticalAlign: 'middle',
                        width: 20,
                        height: 20
                      }}
                    />{' '}
                    <Box component="b"><Link href="https://uwaterloo.ca/" target='_blank'>uwaterloo</Link></Box> (2025-2030)
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ display: "list-item", py: 0, px: 0 }}>
                <ListItemText>
                  <Typography sx={{ wordBreak: 'break-word' }} gutterBottom>experienced in building software; pursuing areas combining programming, math and problem solving</Typography>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ display: "list-item", py: 0, px: 0 }}>
                <ListItemText>
                  <Typography sx={{ wordBreak: 'break-word' }} gutterBottom>avid game developer, solo developed and published several games</Typography>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ display: "list-item", py: 0, px: 0 }}>
                <ListItemText>
                  <Typography sx={{ wordBreak: 'break-word' }} gutterBottom>enjoy puzzles and competitive programming</Typography>
                </ListItemText>
              </ListItem>
          </List>
            <Typography sx={{ fontStyle: 'italic', mt:2 }} gutterBottom>experience:</Typography>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={OrbitalLogo}/>
                </ListItemAvatar>
                <ListItemText primary="UW Orbital" secondary="Software Team Member"/>
                <Typography variant='button'>Nov 2025 — Present</Typography>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={MarketboxLogo}/>
                </ListItemAvatar>
                <ListItemText primary="MarketBox" secondary="Software Engineering Intern"/>
                <Typography variant='button'>Jul 2024 — Aug 2024</Typography>
              </ListItem>
            </List>
            <Typography sx={{ fontStyle: 'italic', mt:2 }} gutterBottom>recent projects:</Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <BulletPoint/>
                </ListItemIcon>
                <Typography>built an <Box component="b"><Link href="https://github.com/KrishnaJawale/player-similarity-analyzer" target='_blank' /*color="inherit"*/>ml scouting tool</Link></Box> that analyzes players from Europe's top 5 leagues by playstyle and uncovers hidden talent</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <BulletPoint/>
                </ListItemIcon>
                <Typography>created <Box component="b"><Link href="https://github.com/KrishnaJawale/yt-chat" target='_blank'>ytchat</Link></Box>, a chrome extension allowing you to chat with and get instant responses from any youtube video, directly from youtube</Typography>
              </ListItem>
            </List>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
