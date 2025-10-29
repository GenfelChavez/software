
//define las rutas a las cuales se dirige

import { BrowserRouter as Router, Route,Routes,useLocation} from 'react-router-dom'


import store from './store';
import { Provider } from 'react-redux';

import {Helmet, HelmetProvider } from 'react-helmet-async';


import AnimatedRoutes from 'Routes';


function App() {



  return (
    <HelmetProvider> 
      <Helmet>
         <title>Zona Software S.R.L.</title>
        <meta name="description" content="Empresa de software. Servicios en el   desarrollo de aplicaciones." />
        <meta name="keywords" content='Empresa de software, , desarrollo de sistemas' />
        <meta name="robots" content='all' />
        <link rel="canonical" href="https://www.ZonaSoftware.com/" />
        <meta name="author" content='ZonaSoftware' />
        <meta name="publisher" content='ZonaSoftware' />

        {/* Social Media Tags */}
        <meta property="og:title" content='ZonaSoftware | Software Agency' />
        <meta property="og:description" content='Empresa de software. Servicios en el   desarrollo de aplicaciones.' />
        <meta property="og:url" content="https://www.ZonaSoftware.com/" />

        <meta name="twitter:title" content=' ZonaSoftware | Software Agency' />
        <meta
            name="twitter:description"
            content='Empresa de software. Servicios en el   desarrollo de aplicaciones.'
        />
        <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
       <Provider store={store}>
    <Router>

      <AnimatedRoutes/>
     
    </Router>
    </Provider>
    </HelmetProvider>
   
  );
}

export default App;