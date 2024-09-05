// BodyLayout.tsx

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface MenuItem {
  id: number;
  MenuName: string;
  DisplayName: string;
  Content: string;
}

interface BodyLayoutProps {
  selectedMenuItem: MenuItem | null;
}

const BodyLayout: React.FC<BodyLayoutProps> = ({ selectedMenuItem }) => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3}}>
      {selectedMenuItem ? (
        <>
          <Typography variant="h4" gutterBottom>
            {selectedMenuItem.DisplayName}
          </Typography>
          <Typography variant="body1">
            {selectedMenuItem.Content}
          </Typography>
        </>
      ) : (
        <Typography variant="h6">
          Please select a menu item from the left to view its content.
        </Typography>
      )}
    </Box>
  );
};

export default BodyLayout;
