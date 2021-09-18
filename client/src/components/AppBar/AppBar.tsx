import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import BasicMenu from '../Menu/Menu';
import { ButtonTypeEnum } from '../Menu/MenuButton'

interface ButtonAppBarProps {
  match?: any
}

export default function ButtonAppBar(props: ButtonAppBarProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <BasicMenu buttonType={ButtonTypeEnum.ICONBUTTON} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
          <BasicMenu buttonType={ButtonTypeEnum.BUTTON} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}