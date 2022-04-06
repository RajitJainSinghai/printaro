import React from 'react';
import Router from './Router';
import './assets/css/adddesign.css';
import './assets/css/cart.css';
import './assets/css/customise.css';
import './assets/css/index.css';
import './assets/css/tshirt.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

function App() {
    return (
        <>
            <Header />
            <Router />
            <Footer />
        </>
    );
}

export default App;
