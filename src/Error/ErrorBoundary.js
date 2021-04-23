import { Component } from "react";

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorOccured: false
        }
    }

    static getDerivedStateFromError(error) {
        console.log("ERROR: " + error);
        return {
            errorOccured: true
        }
    }

    render() {
        if(this.state.errorOccured) {
            return <h1>We have some error</h1>
        }
        return this.props.children;
    }
}