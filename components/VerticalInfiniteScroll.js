import React from 'react';
import $ from 'jquery';
import _ from 'lodash';

// if bundle.js already exists starting server uses bundle.js from file instead of hot compiled,
// why this behavior exists or how to turn it off, I don't know. Deleting bundle.js before starting server
// works though.

export default class VerticalInfiniteScroll extends React.Component {
    constructor(props) {
        super()
        this.state = {
            scrollItem: props.scrollItem,
            items: _.fill(Array(50), props.scrollItem),
        }
    };
    updateItems(diff) {
        if(Array.isArray(diff)) {
            this.setState({
                items: this.state.items.concat(diff)
            })
        } else {
            throw new TypeError('updateItems should only be given an Array');
        }
    }
    render() {
        return (
            <div className='scroll' onScroll={
                event => {
                    let t = event.target;
                    // scroll remaining as percentage of scroll bar left
                    let scrollRemaining = 1 - (t.scrollTop / (t.scrollHeight - t.clientHeight));
                    if(scrollRemaining <= .25) {
                        this.updateItems(_.fill(Array(50), this.state.scrollItem))
                    }
                }
            }>{
                this.state.items.map((item, i) => {
                    return <div className='scrollItem' key={i}>{item}</div>;
                })
            }</div>
        );
    }
}


