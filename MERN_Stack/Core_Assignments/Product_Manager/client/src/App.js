import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import ErrorPage from './views/ErrorPage';

function App() {
    return (
    <div className="App">
      <h1>Product Manager</h1>
        <Routes>
            <Route element={<Main/>} path="/" />
            <Route element={<Detail/>} path="/api/products/:id" />
            <Route element={<Update/>} path="/api/products/:id/edit"/>
            <Route element={<ErrorPage/>} path="*"/>
        </Routes>                         
    </div>
    );
}
export default App;