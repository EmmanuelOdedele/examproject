import { Component } from "react";

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false,
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasErrpor: true,
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log('Logging', error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong</h1>
        }
        return this.props.children
    }
}