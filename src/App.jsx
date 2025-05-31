import { useState } from "react";
import SignInForm from "./components/SignInForm/SignInForm";
import "./App.scss";
import bgImg from "./assets/images/bg-intro-desktop.png";

function App() {
  return (
    <main className="app-container">
      <div className="app">
        <img src={bgImg} alt="" className="app__background" />
        <div className="app__content">
          <div className="app__text">
            <h1 className="app__text--title">
              Learn to code by watching others
            </h1>

            <p className="app__text--snippet">
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understand how
              developers think is invaluable.
            </p>
          </div>
          <SignInForm />
        </div>
      </div>
    </main>
  );
}

export default App;
