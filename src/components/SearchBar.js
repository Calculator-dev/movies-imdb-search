import React, { useEffect, useState} from 'react'
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { useDispatch} from 'react-redux';
import { getMovies } from '../slices/MovieSlice';

import { useHistory } from 'react-router-dom'
import { Button } from '@mui/material';


export default function SearchBar() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [input, setInput] = useState("")

    const handleKey = (e) => {
        e.preventDefault()

            dispatch(getMovies(input))
            history.push("/")
    }

    const onChange = (e) => {
        e.preventDefault()
        setInput(e.target.value)
    }


    

    // useEffect(() => {
    //     dispatch(getMovies("Titanic"))
    // }, [dispatch])

    return (
        <div>
            <form onSubmit={handleKey}>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search Movie..."
                        value={input}
                        onChange={onChange}
                    />
                </Search>
            </form>
        </div>
    )
}

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));