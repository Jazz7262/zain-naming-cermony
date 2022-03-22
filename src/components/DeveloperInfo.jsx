import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHackerrank,
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function DeveloperInfo() {
    return (
        <section id="developer-info">
            <div data-aos="fade" data-aos-delay="100">
                <h4>Want your own Card on the Internet, Contact:</h4>
                <a href="https://ziauddinziya07.github.io">
                    <h1>Ziauddin Ziya</h1>
                </a>
                <p>ziauddinziya07@gmail.com</p>
                <p>+91 95737 67548.</p>

                <div className="icon-section">
                    <a
                        href="https://ziauddinziya07.github.io"
                        className="icon-link"
                    >
                        <FontAwesomeIcon icon={faGithub} size="xl" />
                    </a>
                    <a
                        href="https://www.linkedin.in/in/ziauddinziya"
                        className="icon-link"
                    >
                        <FontAwesomeIcon icon={faLinkedin} size="xl" />
                    </a>
                    <a
                        href="https://www.hackerrank.com/ziauddinziya07?hr_r=1"
                        className="icon-link"
                    >
                        <FontAwesomeIcon icon={faHackerrank} size="xl" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default DeveloperInfo;
