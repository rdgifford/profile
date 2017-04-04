// Modules
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import request from 'request';
import webpack from 'webpack';
// Components
import template from './components/template';
import VerticalInfiniteScroll from './components/VerticalInfiniteScroll';
// Configurations
import webpackConfig from './webpack.config.js';
import youtube from './config/main';
// Server & middleware
const app = express();
const compiler = webpack(webpackConfig);
import webpackDevMiddleware from 'webpack-dev-middleware';

// Set location for static assets
app.use(express.static(__dirname + '/client/assets'));

app.use(webpackDevMiddleware(compiler, {
	hot: true,
	filename: 'bundle.js',
	publicPath: '/',
	stats: {
		colors: true,
	},
	// historyApiFallback: true,
}));

var youtubeOptions = {
    key: youtube.key,
    part: 'contentDetails',
    id: youtube.userId,
}

app.get('/', function (req, res) {
    let scrollItem = 'Serverside';
    let initialState = { scrollItem };
    let appString = renderToString(<VerticalInfiniteScroll {...initialState} />);
    res.send(template({
        body: appString,
        title: 'RDG',
        initialState: JSON.stringify(initialState),
    }));
});

// request({
//     url: 'https://www.googleapis.com/youtube/v3/channels',
//     qs: youtubeOptions
// }, function(err, res, body) {
//     // console.log(err)
//     // console.log(res)
//     console.log(body);
// });

const server = app.listen(3000, 'localhost', function() {
	const host = server.address().address;
	const port = server.address().port;
	console.log('App listening at http://%s:%s', host, port);
});
