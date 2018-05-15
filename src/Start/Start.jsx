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
                    <div className="containerMaps">
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.media}
                                image={yandexMapsLogo}
                                title="Яндекс.Карты"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="headline" component="h2">
                                    Яндекс.Карты
                                </Typography>
                                <Typography component="p">
                                    Один из самых популярных поисково-информационных картографических сервисов, используемых в России
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Узнать больше...
                                </Button>
                            </CardActions>
                        </Card>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.media}
                                image={googleMapsLogo}
                                title="Google Maps"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="headline" component="h2">
                                    Google Maps
                                </Typography>
                                <Typography component="p">
                                    Глобальный картографический сервис, использующийся по всему миру
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Узнать больше...
                                </Button>
                            </CardActions>
                        </Card>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.media}
                                image={gisMapsLogo}
                                title="2ГИС"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="headline" component="h2">
                                    2ГИС
                                </Typography>
                                <Typography component="p">
                                    Картографический сервис, предоставляющий информацонно-поисковый справочник городов
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Узнать больше...
                                </Button>
                            </CardActions>
                        </Card>
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