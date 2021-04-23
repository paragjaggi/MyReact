import { Component } from "react";

export default class NormalComponentExample extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('~~~~~~~~~Normal Component rendered~~~~~~~~~~');
        return (<h1>Normal Component Rendered!</h1>);
    }
}