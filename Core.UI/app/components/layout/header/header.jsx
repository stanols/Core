import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import './header.less'


class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={"header-icon"} color="inherit" aria-label="Open drawer">
                            <MenuIcon />
                        </IconButton>
                        <Typography className={"header-title"} variant="h6" color="inherit" noWrap>
                            Welcome to an Adventure!
                        </Typography>
                        <div className={"header-search"}>
                            <div className={"header-search-icon"}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                            />
                        </div>
                    </Toolbar>
                    
                </AppBar>
            </div>
        );
    }
}

export default Header;