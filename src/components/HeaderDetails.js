import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import logo from "../assets/clapperboard.png"
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#31326F" }}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <Link to="/">
            <MovieLogo src={logo} alt="logo_movie" />
          </Link>
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
              Movies/IMDB Search Application
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const MovieLogo = styled("img")(({ theme }) => ({
    width: "30px",
    height: "30px",
    marginRight: theme.spacing(1),

}))
