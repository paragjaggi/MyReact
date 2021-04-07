import React from 'react';
import naruto from './resources/naruto.png';
import demonSlayer from './resources/demon-slayer.png';
import './MyAnime.css';

const divStyle = {
    'width': '70%',
    'marginTop': '20px',
    'border': '2px black dotted'
};

class MyAnime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            playername: '',
            playeremail: '',
            playerage: '',
            playecountry: '',
            showhideplayerlist: true,
            playerlist: []
        }
        this.password = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClickPlayer = this.handleClickPlayer.bind(this);
        this.handleShowHidePlayer = this.handleShowHidePlayer.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleClick() {
        alert('UserName: ' + this.state.userName + '\n' + 'Password: ' + this.password.current.value);
    }

    handleClickPlayer() {
        let playerList = this.state.playerlist;
        this.setState({
            playername: this.state.playername,
            playeremail: this.state.playeremail,
            playerage: this.state.playerage,
            playecountry: this.state.playecountry
        });
        playerList.push(<li key={this.state.playername + this.state.playeremail}>Name: {this.state.playername}--Email: {this.state.playeremail}--Age:{this.state.playerage}--Country: {this.state.playecountry} </li>);
    }

    handleShowHidePlayer() {
        this.setState({showhideplayerlist: !this.state.showhideplayerlist});
    }

    render() {
        return (
            <div>
                <div className="twoDivs">
                    <div className="loginbox d-flex justify-content-center">
                        <form className="row g-2 col-md-8 padding-zero" name="user-registration-form">
                            <div className="col-md-10">
                                <label htmlFor="username" className="form-label text-light">User Name:</label>
                                <input type="text" className="form-control" id="username" name="username" maxLength="20"
                                    placeholder="Enter your username" value={this.state.userName} onChange={this.handleChange} />
                            </div>
                            <div className="col-md-10">
                                <label htmlFor="password" className="form-label text-light">Password:</label>
                                <input type="password" id="password" name="password" maxLength="20" className="form-control"
                                    placeholder="Enter your password" ref={this.password} />
                            </div>
                            <div className="col-md-10 margin-top">
                                <button type="button" className="btn btn-success" onClick={this.handleClick}>
                                    Login
                        </button>
                            </div>
                        </form>
                    </div>
                    <div className="loginbox d-flex justify-content-center">
                        <form className="row g-2 col-md-6 padding-zero" name="user-registration-form">
                            <div className="col-md-6">
                                <label htmlFor="playername" className="form-label text-light">User Name:</label>
                                <input type="text" className="form-control" id="playername" name="playername" maxLength="20"
                                    placeholder="Enter Player's name" value={this.state.playername} onChange={this.handleChange} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="email" className="form-label text-light">Email:</label>
                                <input type="email" id="email" name="playeremail" maxLength="50" className="form-control"
                                    placeholder="Enter Player's email address" ref={this.state.playeremail} onChange={this.handleChange} />
                            </div>
                            <div className="col-md-2">
                                <label htmlFor="age" className="form-label text-light">Age:</label>
                                <input type="number" id="age" name="playerage" maxLength="3" className="form-control"
                                    placeholder="0" ref={this.state.playerage} onChange={this.handleChange} />
                            </div>
                            <div className="col-md-10">
                                <label className="form-label text-light" htmlFor="country">Country:</label>
                                <select className="form-control" name="playecountry" id="country" ref={this.state.playecountry} onChange={this.handleChange}>
                                    <option value="0"></option>
                                    <option value="1">Paris</option>
                                    <option value="2">Italy</option>
                                    <option value="3">India</option>
                                    <option value="4">Japan</option>
                                </select>
                            </div>
                            <div className="col-md-10 margin-top">
                                <button type="button" className="btn btn-success" style={{'marginRight': '1em'}} onClick={this.handleClickPlayer}>
                                    Submit
                                </button>
                                <button type="button" className="btn btn-warning" onClick={this.handleShowHidePlayer}>
                                    Show/Hide List
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="listColor text-white">
                        <ul>
                            {this.state.showhideplayerlist ? this.state.playerlist: ''}
                        </ul>
                    </div>
                </div>
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators margin-bottom-zero">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active my-border">
                            <a href="naruto.html">
                                <img src={naruto} className="d-block" alt="Naruto" />
                                <div className="carousel-caption d-none d-md-block margin-bottom-zero background-style">
                                    <h5><strong>Synopsis.</strong>The Nine-Tails attacking Konoha. Twelve years before the start of
                            the
                            series, the Nine-Tails attacked Konohagakure destroying much of the village and taking many
                            lives. The leader of the village, the Fourth Hokage, sacrificed his life to seal the
                            Nine-Tails
                            into a newborn, Naruto Uzumaki.</h5>
                                </div>
                            </a>
                        </div>
                        <div className="carousel-item my-border">
                            <img src={demonSlayer} className="d-block" alt="Demon Slayer" />
                            <div className="carousel-caption d-none d-md-block margin-bottom-zero background-style">
                                <h5><strong>Synopsis.</strong>A youth begins a quest to fight demons and save his sister after
                        finding his family slaughtered and his sister turned into a demon.</h5>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon my-icon-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon my-icon-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="container font-italic bg-light" style={divStyle}>
                    <h3>What is anime exactly?</h3>
                    <p>
                        Anime (Japanese: アニメ, IPA: [aɲime] ( listen)) is hand-drawn and computer animation originating from Japan. In
                        Japan and in Japanese, anime (a term derived from the English word animation), describes all animated works,
                        regardless of style or origin.
                </p>
                </div>
            </div>
        );
    }
}

export default MyAnime;