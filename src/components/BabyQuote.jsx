import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function BabyQuote() {
    return (
        <section id="baby-quote">
            <div className="inner-content">
                <h3>
                    My Mom and Dad have decide to Name me and perform my Aqeeqah
                    and we want you and your Family to share our happiness
                    together. So plese be there to bless me when I get named ...
                </h3>
                <div className="left-align">
                    <h3>
                        With Love {" "}
                        <FontAwesomeIcon icon={faHeart} size="lg" />
                    </h3>
                    <h1>--- Zain-ul-Abideen.</h1>
                </div>
            </div>
        </section>
    );
}

export default BabyQuote;
