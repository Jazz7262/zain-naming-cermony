import React from "react";

function BabyInfo() {
    return (
        <section id="baby-info">
            <h1 className="title-quote"> .... ماشاءاللہ</h1>

            <div className="wrapper">
                <div className="content" data-aos="fade-up">
                    <img
                        className="baby-img"
                        src="../assets/images/zain.png"
                        alt="Baby_img"
                    />
                    <div className="info">
                        <h3>
                            Zain-ul-Abideen{" "}
                            <span className="small-text">urf</span> C.N.
                            Muhammad Sufiyaan,
                        </h3>
                        <br />
                        <h5>
                            S/O Mrs. and Mr. C.N. Muhammad Taher Raza Misbahi
                        </h5>

                        <h6>
                            Paternal Grand S/O Janab C.N. Abdul Qadeer Raza
                            Sahab
                        </h6>
                        <h6>
                            Maternal Grand S/O Janab KSA Amanullah Ashrafi Sahab
                        </h6>
                        <h4 className="dob">Date of Birth: 17/02/2022.</h4>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BabyInfo;
