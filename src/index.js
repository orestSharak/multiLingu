import React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider, addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import pl from 'react-intl/locale-data/pl';
import {flattenMessages} from "./utils"
import App from './App';
import messages from './API/messages';
import './index.css';


addLocaleData([...en, ...pl]);


let locale =
    'pl-PL'
    || (navigator.languages && navigator.languages[0])
    || navigator.language
    || navigator.userLanguage;


class Container extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            locale: locale
        };

        this.changeLocale = this.changeLocale.bind(this)
    }

    changeLocale(locale) {
        this.setState({'locale': locale})
    }

    render() {
        return (
            <IntlProvider locale={this.state.locale} messages={flattenMessages(messages[this.state.locale])}>
                <App changeLocale={this.changeLocale}/>
            </IntlProvider>
        )
    }
}

ReactDOM.render(
    <Container/>,
    document.getElementById('root')
);

