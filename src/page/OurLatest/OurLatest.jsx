import React from "react";
import "./ourlatest.css";

const OurLatest = () => {
  return (
    <>
      <section className="mt-5">
        <div className="container">
          <p>Our News</p>
          <h1>OUR LATEST NEWS UPDATES</h1>
          <div style={{ float: "right" }}>
            <button>Arrow</button>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <div className="container">
          <div id="owl-demo-2" className="owl-carousel owl-theme">
            <article className="thumbnail item">
              <a href="#!">
                <img
                  src="assets/images/service-1.jpg"
                  className="img-responsive"
                />
              </a>
              <div className="caption">
                <h4>Bootstrap 4</h4>
                <p className="flex-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aspernatur debitis obcaecati sint doloremque unde hic aliquid!
                  Aspernatur, quia debitis. Doloribus odio quia ratione id
                  laudantium adipisci distinctio, placeat quos accusamus?
                </p>
                <a className="btn btn-primary btn-block">Button Text</a>
              </div>
            </article>
            <article className="thumbnail item">
              <a href="#!">
                <img
                  src="assets/images/service-2.jpg"
                  className="img-responsive"
                />
              </a>
              <div className="caption">
                <h4>jQuery 3.5.1</h4>
                <p className="flex-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aspernatur debitis obcaecati sint doloremque unde hic aliquid!
                  Aspernatur, quia debitis. Doloribus odio quia ratione id
                  laudantium adipisci distinctio, placeat quos accusamus?
                </p>
                <a className="btn btn-primary btn-block">Button Text</a>
              </div>
            </article>
            <article className="thumbnail item">
              <a href="#!">
                <img
                  src="assets/images/service-3.jpg"
                  className="img-responsive"
                />
              </a>
              <div className="caption">
                <h4>This is a heading</h4>
                <p className="flex-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aspernatur debitis obcaecati sint doloremque unde hic aliquid!
                  Aspernatur, quia debitis. Doloribus odio quia ratione id
                  laudantium adipisci distinctio, placeat quos accusamus?
                </p>
                <a className="btn btn-primary btn-block">Button Text</a>
              </div>
            </article>

            <article className="thumbnail item">
              <a href="#!">
                <img
                  src="assets/images/service-3.jpg"
                  className="img-responsive"
                />
              </a>
              <div className="caption">
                <h4>This is a heading</h4>
                <p className="flex-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aspernatur debitis obcaecati sint doloremque unde hic aliquid!
                  Aspernatur, quia debitis. Doloribus odio quia ratione id
                  laudantium adipisci distinctio, placeat quos accusamus?
                </p>
                <a className="btn btn-primary btn-block">Button Text</a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurLatest;
