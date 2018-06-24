import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from '../components/Home';
import News from '../components/News';
import ViewNew from '../components/ViewNew';
import {FormattedMessage} from 'react-intl';

class Routs extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to="/"><FormattedMessage id="nav.home"/></Link>
                    <Link to="/news"><FormattedMessage id="nav.news"/></Link>
                    <Route exact path="/" component={Home}/>
                    <Route path="/news" component={News}/>
                    <Route path="/viewnew/:id" component={ViewNew}/>
                </div>
            </Router>
        )
    }
}

export default Routs;