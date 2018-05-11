import React, { Component, Fragment } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import startStyles from './Start.css';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
    }),
});

class Start extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <Paper
                    className={classes.root}
                    elevation={4}>
                    <Typography
                        variant="headline"
                        component="h3">
                        Пройдите тест :)
                    </Typography>
                    <Button
                        variant="raised" color="secondary">
                        Начать тест!
                    </Button>
                </Paper>
            </Fragment>
        )
    }
}

export default withStyles(styles)(Start);