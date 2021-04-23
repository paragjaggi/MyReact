import { PureComponent } from "react";

export default class PureComponentExample extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('~~~~~~~~~~~Pure Component rendered~~~~~~~~~~~~~');
        return (<h1>PureComponent Rendered</h1>);
    }
}