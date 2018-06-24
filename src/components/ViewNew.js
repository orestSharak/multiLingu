import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import datas from '../API/en/datas';

const ViewNew = ({match}) => {
    const data = datas.find(({id}) =>
    id === match.params.id);
    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <Link to="/news"><button>Back</button></Link>
        </div>
    )
}
export default ViewNew;
