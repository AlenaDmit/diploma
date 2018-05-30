import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.png';
import img4 from './4.png';
import img5 from './5.png';
import img6 from './6.png';
import img7 from './7.jpg';
import './Main.css';

const tileData = [
    {
        img: img4,
        title: 'Image4',
        cols: 2
    },
    {
        img: img5,
        title: 'Image5',
        cols: 1
    },
    {
        img: img6,
        title: 'Image6',
        cols: 2
    },
    {
        img: img7,
        title: 'Image7',
        cols: 1
    },
    {
        img: img1,
        title: 'Image1',
        cols: 1
    },
    {
        img: img3,
        title: 'Image3',
        cols: 2
    },
];


const styles = theme => ({
    root: theme.mixins.gutters({
      padding: 20,
      margin: '0 100px 0 0',
      maxWidth: 400,
      minHeight: 400,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }),
    paperHead: {
        margin: '0 0 20px 0'
    },
    paragraph: {
        margin: '0 0 20px 0'
    },
    rootGrid: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 400,
    },
    subheader: {
        width: '100%',
    },
  });

function Main(props) {
    const { classes } = props;
    return(
        <Fragment>
            <div className="mainWrapper"> 
                <Paper className={classes.root} elevation={4}>
                    <Typography variant="headline" component="h3" className={classes.paperHead}>
                    Приложение для выбора API карт 
                    </Typography>
                    <Typography component="p" className={classes.paragraph}>
                    Данное приложение поможет определиться с выбором подходящего картографического интерфейса для его внедрения в web-приложение исходя из задач, предъявляемых к будущей карте
                    </Typography>
                    <Typography component="p" className={classes.paragraph}>
                    Внутренние алгоритмы приложения предложат Вам наиболее оптимальный вариант для вашей картографической реализации
                    </Typography>
                    <Typography component="p" className={classes.paragraph}>
                    Система ориентирована на выбор из трёх API: Google Maps, 2GIS, Яндекс.Карты
                    </Typography>
                    <div className="buttonsWrapper">
                        <Button variant="outlined" color="primary" className={classes.button}>
                            Начать тест
                        </Button>
                        <Button variant="outlined" color="secondary" className={classes.button}>
                            Узнать больше об API
                        </Button>
                    </div>
                </Paper>
                <div className={classes.rootGrid}>
                    <GridList cellHeight={160} className={classes.gridList} cols={3}>
                        {tileData.map(tile => (
                        <GridListTile key={tile.img} cols={tile.cols || 1}>
                            <img src={tile.img} alt={tile.title} />
                        </GridListTile>
                        ))}
                    </GridList>
                </div>
            </div>
        </Fragment>
    )
}

Main.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Main);