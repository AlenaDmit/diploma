import React, { Component, Fragment } from 'react';
import "./Header.css";
import bgImg from './bg.jpg';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
      backgroundImage: `url( ${bgImg} )`,
      backgroundPosition: 'left 10%'
    },
    text: {
        color: '#fff'
    }
  };

function Header(props) {
    const { classes } = props;
    return (
        <Fragment>
            <AppBar position="static" color="default" className={classes.root}>
                <Toolbar>
                    <Typography variant="title" color="inherit" className={classes.text} >
                        ВЫБОР КАРТОГРАФИЧЕСКОГО API ДЛЯ WEB
                    </Typography>
                </Toolbar>
            </AppBar>
        </Fragment>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Header);