import React from "react";
import { Link } from "react-router-dom";

const Profil = () => {
  return (
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://i.pinimg.com/564x/b0/a8/6f/b0a86f14128e18ae4c488e1856208088.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello Everyone!</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <Link
      to={"/detail/"}
      className="btn btn-primary">
      Get Started
      </Link>
    </div>
  </div>
</div>
  );
};

export default Profil;
