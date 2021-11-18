import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from "../assets/clapperboard.png";
import SearchBar from './SearchBar';

const MovieLogo = styled("img")(({ theme }) => ({
    width: "30px",
    height: "30px",
    marginRight: theme.spacing(1),

}))

const ToolbarStyle = styled(Toolbar)({
    '@media (max-width: 992px)': {
        padding: "0 15px 0 15px"
    },
    '@media (max-width: 1440px)': {
        padding: "0px 30px 0 40px"
    },
    '@media (min-width: 1550px)': {
        padding: "0px 40px 0 60px"
    },
})

export default function Header() {

    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="relative" style={{ background: "#31326F" }} >
                <ToolbarStyle>
                        <MovieLogo src={logo} alt="logo_movie" />
                    <Typography
                        variant="h5"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Movies/IMDB Search Application
                    </Typography>
                    
                    <SearchBar />
                </ToolbarStyle>
            </AppBar>
        </Box>
    );
}