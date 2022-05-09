import React from 'react';
import ReactDOM from 'react-dom/client';
import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<CounterWithCustomHook />);

