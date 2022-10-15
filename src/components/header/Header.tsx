import { Box, Typography, Dialog, Switch, Button } from '@mui/material';
import { useState } from 'react';
import { useAppContext, useHandlersContext } from '../../app/context';
import Cog from './Cog';

const Header = () => {
  const {
    ui: { isRunningLineShown },
  } = useAppContext();

  const { toggleRunningLine } = useHandlersContext();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        py: 4,
        px: 9,
      }}
    >
      <Typography variant="h1">To do</Typography>
      <Button
        sx={{
          display: 'flex',
          cursor: 'pointer',
        }}
        onClick={openDialog}
      >
        <Cog />
      </Button>

      <Dialog open={isDialogOpen} onClose={closeDialog}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: 4,
          }}
        >
          <Typography>News visibility</Typography>
          <Switch checked={isRunningLineShown} onChange={toggleRunningLine} />
        </Box>
      </Dialog>
    </Box>
  );
};

export default Header;
