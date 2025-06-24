import { useState } from 'react'
import { 
  Box, 
  Button, 
  Typography, 
  Container, 
  Paper,
  Stack,
  IconButton
} from '@mui/material'
import { 
  Add as AddIcon, 
  Remove as RemoveIcon,
  Refresh as RefreshIcon 
} from '@mui/icons-material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Vite + React + MUI
          </Typography>
          
          <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
            Edit <code>src/App.tsx</code> and save to test HMR
          </Typography>

          <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" sx={{ mb: 3 }}>
            <IconButton 
              onClick={() => setCount(count - 1)}
              color="primary"
              size="large"
            >
              <RemoveIcon />
            </IconButton>
            
            <Typography variant="h4" component="span" sx={{ minWidth: 80 }}>
              {count}
            </Typography>
            
            <IconButton 
              onClick={() => setCount(count + 1)}
              color="primary"
              size="large"
            >
              <AddIcon />
            </IconButton>
          </Stack>

          <Button 
            variant="outlined" 
            startIcon={<RefreshIcon />}
            onClick={() => setCount(0)}
          >
            Reset Counter
          </Button>
        </Paper>
      </Box>
    </Container>
  )
}

export default App
