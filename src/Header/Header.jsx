import React, { Component, Fragment } from 'react';
import "./Header.css";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
      
    },
  };

function Header(props) {
    const { classes } = props;
    return (
        <Fragment>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Title
                    </Typography>
                </Toolbar>
            </AppBar>
        </Fragment>
    );
}


  

export default Header;