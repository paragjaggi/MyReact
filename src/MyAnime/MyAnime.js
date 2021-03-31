import React from 'react';
import naruto from './resources/naruto.png';
import demonSlayer from './resources/demon-slayer.png';
import './MyAnime.css';

const divStyle = {
    'width': '70%',
    'margin-top': '20px',
    'border': '2px black dotted'
};

const MyAnime = () => {
    return (
        <div>
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

export default MyAnime;