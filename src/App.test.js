import React from 'react';
import ReactDOM from 'react-dom';
//memoryrouter gives us the ability to pass specific path and therefore the ability to 
//check that if someone is calling that path then we are rendering the right component
import {MemoryRouter} from 'react-router-dom'
import Vitamin from './components/Vitamin'
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('vitamin renders successfully', () => {
  const div = document.createElement('div');
  //give the path inside initialEntries array
  ReactDOM.render(
  <MemoryRouter initialEntries={['/vitamin']}>
    <Vitamin/>
  </MemoryRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});
