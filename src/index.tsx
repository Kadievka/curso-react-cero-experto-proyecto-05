import React from 'react';
import ReactDOM from 'react-dom/client';
// import HooksApp from './HooksApp';
// import CounterApp from './components/01-useState/CounterApp';
// import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';
import SimpleForm from './components/02-useEffect/SimpleForm';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<SimpleForm />);

