import React from 'react';
import './App.css';
import GetAllQuotes from './component/getAllQuotes';
import SearchQuote from './component/searchAuthor';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#dddddd',
    },
  },
});

const App = () => {
 
  return (
    <>
     <ThemeProvider theme={theme}>
        <h5>Random Quotes</h5>
             <div>
            <GetAllQuotes />
            </div>
            <div>
            <SearchQuote />
            </div>
          </ThemeProvider>
    </>
  );

};

export default App;
