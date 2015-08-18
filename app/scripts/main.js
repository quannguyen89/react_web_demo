import React from 'react';
import Router from 'react-router';
import routes from './routes';

require('font-awesome/css/font-awesome.min.css');
require('bootstrap/dist/css/bootstrap.min.css');
require('react-picture-show/src/PictureShow.scss');
Router.run(routes, Handler => React.render(<Handler />, document.body));
