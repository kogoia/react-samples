import express from 'express'
import path from 'path'

import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config.dev'
import bodyParser from 'body-parser'

import users from './routes/users'

let app = express();

const compiler = webpack(webpackConfig);

app.use(bodyParser.json());

app.use(
    '/api/users',
    users
);

app.use(
    webpackMiddleware(
        compiler,
        {
            hot: true,
            publicPath: webpackConfig.output.publicPath,
            noInfo: true
        }
    )
);

app.use(
    webpackHotMiddleware(
        compiler
    )
);


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
    //res.send('hello world');
});

app.listen(3000, () => console.log('Runnign on localhost:3000'));