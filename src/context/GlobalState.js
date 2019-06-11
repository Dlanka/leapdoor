import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import GlobalContext from './GlobalContext';

class GlobalState extends Component {

    state = {
       
    }


    render() {

        return (
            <GlobalContext.Provider value={{}}>
                {this.props.children}
            </GlobalContext.Provider>
        )
    }
}

export default withRouter(GlobalState)