import * as React from 'react';


export class ErrorBoundary extends React.Component<any, any> {
  private hasError: boolean;

  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  private static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    try {
      return this.props.children;
    } catch (e) {
      return 'ufff';
    }
  }
}