const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const youtube = require('../config/main.js').youtube;
const app = express();
const request = require('request');

const compiler = webpack(webpackConfig);

app.use(express.static(__dirname + '/www'));

app.use(webpackDevMiddleware(compiler, {
	// hot: true,
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


request({
    url: 'https://www.googleapis.com/youtube/v3/channels',
    qs: youtubeOptions
}, function(err, res, body) {
    console.log('qs', qs)
    // console.log(err)
    console.log(res)
    // console.log(body);
});

const server = app.listen(3000, 'localhost', function() {
	const host = server.address().address;
	const port = server.address().port;
	console.log('App listening at http://%s:%s', host, port);
});
