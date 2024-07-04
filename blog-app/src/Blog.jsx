import React from 'react';
import { Card, CardContent, Typography, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const Blog = ({ title, content, author, date, tags }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      style={{ marginBottom: '20px'  , marginTop:'15px'}}
    >
      <Card variant="outlined" sx={{ borderRadius: '15px', backgroundColor: '#ffffff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom color="secondary">
            {title}
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', marginBottom: '10px', color: '#333333' }}>
            {content}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            By {author} on {date}
          </Typography>
          <Stack direction="row" spacing={1} mt={2}>
            {tags.map((tag, index) => (
              <Chip key={index} label={tag} color="primary" />
            ))}
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Blog;
