import React, { Component, Fragment } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import yandexMapsLogo from './yandex.jpeg';
import googleMapsLogo from './google.png';
import gisMapsLogo from './2gis.jpg';
import startStyles from './Start.css';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
    }),
    card: {
        maxWidth: 300,
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
});

const Maps = [
    {
        name: 'Яндекс.Карты',
        desc: 'Один из самых популярных поисково-информационных картографических сервисов, используемых в России',
        img: yandexMapsLogo
    },
    {
        name: 'Google Maps',
        desc: 'Глобальный картографический сервис, использующийся по всему миру',
        img: googleMapsLogo
    },
    {
        name: '2ГИС',
        desc: 'Картографический сервис, предоставляющий информацонно-поисковый справочник городов',
        img: gisMapsLogo
    }
]

class Start extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        const maps = Maps.map(maps => (
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={maps.img}
                    title={maps.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {maps.name}
                    </Typography>
                    <Typography component="p">
                        {maps.desc}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Узнать больше...
                    </Button>
                </CardActions>
            </Card>)
        );
        return (
            <Fragment>
                <Paper
                    className={classes.root}
                    elevation={4}>
                    <div className="containerMaps">
                        {maps}
                    </div>
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