import React from 'react';
require('./styles.scss');

const Header = () => {
    return ( 
        <header>
            <div className="overlay"></div>
                <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                    <source src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" type="video/mp4" />
                </video>
                <div className="container h-100">
                    <div className="d-flex text-center h-100">
                        <div className="my-auto w-100 text-white">
                        <h1 className="display-3">Welcome</h1>
                        <h2>Jump start coding with my template!</h2>
                    </div>
                </div>
            </div>
        </header>
     );
}
 
export default Header;