import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './app'
import Counter from './component/count';
import AddCardItem from './component/stock';
import DataComponent from './component/dataComponent';
import Card from './component/card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/count" element={<Counter />} />
        <Route path="/stock" element={<AddCardItem />} /> 
        <Route path="/DataComponent" element={<DataComponent />} /> 
        <Route path="/card" element={<Card />} /> 
        {/* <Route exact path="/mangement" element={<Mangement />} /> */}
        {/* <Route path="/stock" element={<AddCardItem />} />  */}
      </Routes>
    </BrowserRouter>
);

