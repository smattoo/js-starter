import express from 'express';
import open from 'open';
import { RouteConfig } from './routeConfig';
import webpack from 'webpack';
import webpackConfig from '../../webpack.config.dev';

const port = 3000;
const app = express();

const compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));


RouteConfig.register(app);

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
})


