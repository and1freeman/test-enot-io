import React from 'react';
import Main from '../pages/Main';
import AppProvider from './context';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
              sx={{
                overflowY: 'auto',
                height: '100vh',
              }}
            >
              <Main />
            </Box>
          </ThemeProvider>
        </LocalizationProvider>
      </AppProvider>
    </QueryClientProvider>
  );
};

export default App;
