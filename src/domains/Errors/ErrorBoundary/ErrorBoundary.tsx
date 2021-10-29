import { Component, ErrorInfo } from 'react';

import {
    ErrorProps,
    ErrorState,
} from '@Errors/interfaces/errorsBoundary.interface';

class ErrorBoundary extends Component<ErrorProps, ErrorState> {
    public state: ErrorState = {
        hasError: false,
    };

    public static getDerivedStateFromError(): ErrorState {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        alert(error);
        return;
    }

    public render() {
        if (this.state.hasError) {
            return <h1>Sorry.. there was an error</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;