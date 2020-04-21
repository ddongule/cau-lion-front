import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/Index';
import NavBar from './components/common/nav/Navbar';
import Activity from './components/about/ActivitySection';



ReactDOM.render(
    [<NavBar />, <App />,<Activity />,],
    document.getElementById('root')
);


export default App;
