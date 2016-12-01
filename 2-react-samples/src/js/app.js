import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import ValidationForm from './components/ValidationForm';
import Wrapper from './components/Wrapper';
import Buttons from './components/ButtonsComp';

ReactDOM.render(<Layout/>, document.getElementById("app"));

//ReactDOM.render(<Layout/>, document.getElementById("app1"));

ReactDOM.render(<ValidationForm labelName="Name - 123"/>, document.getElementById("app2"));

ReactDOM.render(<Wrapper/>, document.getElementById("app3"));

ReactDOM.render(<Buttons/>, document.getElementById("app4"));