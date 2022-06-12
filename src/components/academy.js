import React from "react";

function Academy() {
    return (
        <section className="academy" id="academy">
            <div className="container">
              <h2 className="title"><span>ACADEMY</span></h2>
              <article className="hobby">
                <h3 className="sub-title">Hobby</h3>
                <div className="img-box">
                  <img src={process.env.PUBLIC_URL + '/images/academy_hobby.jpg'} alt="hobby" />
                </div>
                <p className="text">
                  Drawing is a good hobby for you, Let's draw a beautiful picture together.
                </p>
              </article>
              <article className="major">
                <h3 className="sub-title">Major</h3>
                <div className="img-box">
                  <img src={process.env.PUBLIC_URL + '/images/academy_major.jpg'} alt="major" />
                </div>
                <p className="text">
                  Improve your skills by learning at our academy, you can be an expert.
                </p>
              </article>
              <article className="enjoy">
                <h3 className="sub-title">Enjoy</h3>
                <div className="img-box">
                  <img src={process.env.PUBLIC_URL + '/images/academy_enjoy.jpg'} alt="enjoy" />
                </div>
                <p className="text">
                  Art relieves stress and becomes a vital part of life.
                </p>
              </article>
            </div>
        </section>
    );
}

export default Academy;