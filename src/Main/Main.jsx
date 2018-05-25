import React, { Component, Fragment } from 'react';
import { Divider } from 'material-ui';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Fragment>
                Данное приложение поможет определиться с выбором подходящего картографического интерфейса для его внедрения в web-приложение исходя из задач, предъявляемых к будущей карте
            </Fragment>
        )
    }
}

export default Main;