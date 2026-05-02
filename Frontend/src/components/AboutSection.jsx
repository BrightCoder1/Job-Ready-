// AboutSection.jsx

import React from "react";
import "./css/AboutSection.css";

const AboutSection = () => {
    return (
        <div className="about-section">
            <div className="about-left">
                <span className="small-heading">WHAT WE ARE DOING</span>

                <h1>
                    24k Talented people <br />
                    are getting Jobs
                </h1>

                <h3>
                    Mollit anim laborum duis au dolor in voluptate velit ess cillum
                    dolore eu lore dsu quality mollit anim laborumuís au dolor in
                    voluptate velit cillum.
                </h3>

                <p>
                    Mollit anim laborum.Duis aute irufg dhjkolohr in re voluptate velit
                    esscillumlore eu quife nrulla parihatur. Excghcepteur signjnjt occa
                    cupidatat non inulpadeserunt mollit aboru.
                </p>
            </div>

            {/* Right Image */}
            <div className="about-right">
                <img src="https://themewagon.github.io/jobfinderportal/assets/img/service/support-img.jpg" alt="about" />
            </div>
        </div>
    );
};

export default AboutSection;