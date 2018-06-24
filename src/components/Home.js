import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';

class Home extends Component {
    render() {
        return(
            <div>
                <h1>
                    <FormattedMessage id="nav.home"/>
                </h1>
                <hr/>
            </div>
        )
    }
}
export default Home;