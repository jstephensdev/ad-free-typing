import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children?: ReactNode;
}

interface ErrorState {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, ErrorState> {
    public state: ErrorState = {
        hasError: false,
    };

    public static getDerivedStateFromError(_: Error): ErrorState {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <section className="app">
                    <h1>Sorry... there was an error</h1>
                </section>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
