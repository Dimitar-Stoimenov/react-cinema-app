import React from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: '', info: '', stack: '' }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo)
    this.setState({ error, info: errorInfo, stack: error.stack })
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI

      // this.props.history.push('/home');
      // document.location.reload();
      return (
      <>
        <h4>Something went wrong!</h4>
        <a href="/">Go to Home Page</a>
      </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary