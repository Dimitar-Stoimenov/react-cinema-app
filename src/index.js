import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary'

import App from './App';
import reportWebVitals from './reportWebVitals';

function ErrorFallback({ error, resetErrorBoundary }) {
  const navigate = useNavigate();
  let path = window.location.pathname.split('/');
  path.pop();
  path = path.join('/');

  useEffect(() => {
    navigate(path);
    resetErrorBoundary();
  });

  return (
    <div role="alert">
      <p>Something went wrong.</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <App />
      </ErrorBoundary >
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
