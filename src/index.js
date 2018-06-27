import React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider, addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import pl from 'react-intl/locale-data/pl';
import {flattenMessages} from "./utils"
import App from './App';
import messages from './API/messages';
import './index.css';
import * as queryString from 'query-string';


addLocaleData([...en, ...pl]);


const parsedSearch = queryString.parse(window.location.search)
const { lang } = parsedSearch
let locale = lang
    || 'pl-PL'
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
        parsedSearch.lang = locale
        window.location.search = queryString.stringify(parsedSearch)
        this.setState({'locale': locale})
    }

    render() {
        const { locale } = this.state

        return (
            <IntlProvider locale={locale} messages={flattenMessages(messages[locale])}>
                <App changeLocale={this.changeLocale}/>
            </IntlProvider>
        )
    }
}

ReactDOM.render(
    <Container/>,
    document.getElementById('root')
);

