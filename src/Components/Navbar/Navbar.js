import React from 'react';
import Appbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './Navbar.scss';

const Navbar = () => (
    <Appbar position="static" id='navbar'>
        <Toolbar>
            <Typography variant="h2" color="inherit">
                <span>Todo</span>
            </Typography>
        </Toolbar>
    </Appbar>
)

export default Navbar;
