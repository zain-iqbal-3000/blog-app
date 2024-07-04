import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Blog from './Blog';
import blogs from './blogs.json';
import './App.css';
import '@fontsource/roboto';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff4081',
    },
    secondary: {
      main: '#3f51b5',
    },
  
    text: {
      primary: '#333333',
      secondary: '#666666',
    },

  },
  typography: {
    fontFamily: 'Roboto, Arial',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      marginTop: 0,
    },

  },


  components: {
 
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'linear-gradient(to right, #ff4081, #3f51b5)', 
        },
      },
    },
  },
});

function App() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    setBlogPosts(blogs);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom color="primary">
          Blog Posts
        </Typography>
        <Box className="blog-list" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {blogPosts.map((blog) => (
            <Blog
              key={blog.id}
              title={blog.title}
              content={blog.content}
              author={blog.author}
              date={blog.date}
              tags={blog.tags}
            />
          ))}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;