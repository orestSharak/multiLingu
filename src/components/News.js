import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
import datas from '../API/en/datas';

const News = ({match}) => {
    return (
        <div>
            <h1>
                <FormattedMessage id="nav.news"/>
            </h1>
            <hr/>
            <ul>
                {datas.map(i => (
                    <li key={i.id}>
                        <Link to={{
                            pathname: `/viewnew/${i.id}`
                        }}>{i.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default News;