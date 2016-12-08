
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import About from './About';
import Repos from './Repos';
import Other from './Other';
import Home from './Home';
import Layout from './Layout';
import RoutedApp from './RoutedApp';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// ReactDOM.render(
//     <Router history={browserHistory}>
//         <Route path="/" component={App}>
//             <IndexRoute component={Home} />
//             <Route path="/About" component={About}/>
//             <Route path="/Repos" component={Repos}>
//                 <Route path="/Repos/:userName/:repoName" component={Repos}/>
//             </Route>
//             <Route path="/Other/:repoName/:userName" component={Other}/>
//         </Route>
//     </Router>,
//     document.getElementById("app")
// );

ReactDOM.render(
    new RoutedApp({
        App
    }).create(),
    document.getElementById("app")
);
