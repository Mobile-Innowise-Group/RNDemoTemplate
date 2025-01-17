import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback: (props: { error: Error; resetError: () => void }) => React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log('Error caught by Error Boundary:', error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
  };

  render(): React.ReactNode {
    if (this.state.hasError && this.state.error) {
      return this.props.fallback({
        error: this.state.error,
        resetError: this.resetError,
      });
    }

    return this.props.children;
  }
}

export { ErrorBoundary };
