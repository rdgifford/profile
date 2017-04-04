import React from 'react';
import { render } from 'react-dom';
import VerticalInfiniteScroll from '../components/VerticalInfiniteScroll';

document.addEventListener("DOMContentLoaded", function(event) { 
    render(<VerticalInfiniteScroll {...window.__APP_INITIAL_STATE__} />, document.getElementsByClassName('container')[0]);
})
