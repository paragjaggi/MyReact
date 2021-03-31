import React, { Component } from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm nav-pills bg-dark">
                <ul className="nav  mr-auto">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page">{this.props.siteName}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Naruto <span className="badge badge-secondary">1</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Demon Slayer</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Register</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-success my-2 my-sm-0" type="button">Search</button>
                </form>
            </nav>
        );
    }
}

export default Header;
