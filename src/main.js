import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// if bundle.js already exists starting server uses bundle.js from file instead of hot compiled,
// why this behavior exists or how to turn it off, I don't know. Deleting bundle.js before starting server
// works though.

class InfiniteScroll extends React.Component {
    constructor() {
        super()
    };
    render() {
        return (
            <div className='scroll'>hello</div>
        );
    }
}
$().ready(() => {
    console.log('DOM ready');
    let body = document.getElementsByClassName('container')[0];
    console.log(body);
    ReactDOM.render(<InfiniteScroll />, body);
});
