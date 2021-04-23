import { Component } from "react";

export default class CountryComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if(this.props.country.length == 0) {
            throw new Error("Country name not given")
        }
        return (
            <h1>Country name is : {this.props.country}</h1>
        );
    }
}