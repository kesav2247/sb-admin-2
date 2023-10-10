import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import Sidebar from './Layout/Sidebar/Sidebar';
import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';
import Content from './Layout/Content/Content';
import Earning from './Layout/Earning/Earning';
import Project from "./Layout/Project/Project";
import Chat from './Layout/Chat/Chat';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Sidebar />
    <Header />
    <Content />
    <Earning />
    <Chat />
    <Project />
    <Footer />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
