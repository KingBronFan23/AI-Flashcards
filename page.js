'use client'

import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function HomePage() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Flashcard SaaS
          </Typography>
          <SignedOut>
            <Button color="inherit" href="/sign-in">Login</Button>
            <Button color="inherit" href="/sign-up">Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

        <Box sx={{textAlign: 'center', my: 4}}>
            <Typography variant="h2" component="h1" gutterBottom>
                Welcome to Flashcard SaaS
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
                The easiest way to create flashcards from your text.
            </Typography>
            <Button variant="contained" color="primary" sx={{mt: 2, mr: 2}} href="/generate">
                Get Started
            </Button>
            <Button variant="outlined" color="primary" sx={{mt: 2}}>
                Learn More
            </Button>
        </Box>

    <Box sx={{my: 6}}>
        <Typography variant="h4" component="h2" gutterBottom>Features</Typography>
        <Grid container spacing={4}>
            {/* Feature items */}
        </Grid>
    </Box>

    
    <Box sx={{my: 6, textAlign: 'center'}}>
        <Typography variant="h4" component="h2" gutterBottom>Pricing</Typography>
        <Grid container spacing={4} justifyContent="center">
            {/* Pricing plans */}
        </Grid>
    </Box>

    
    </>
  )
}


