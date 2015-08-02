import React from 'react';
import Router from 'react-router';
import routes from './routes';

require('bootstrap/dist/css/bootstrap.min.css');
Router.run(routes, Handler => React.render(<Handler />, document.body));
