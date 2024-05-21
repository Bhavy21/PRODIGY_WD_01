import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main2 from './Main2';
import './style.css'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main2 />} />
            </Routes>
        </Router>
    );
};

export default App;
