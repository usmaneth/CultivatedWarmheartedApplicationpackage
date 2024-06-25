import React, { useState } from "react";
import SpeakeUI from "./SpeakeUI";

function App() {
  const [showLandingPage, setShowLandingPage] = useState(true);
  const [error, setError] = useState(null);

  const handleEnterApp = () => {
    console.log("Entering app");
    try {
      setShowLandingPage(false);
    } catch (err) {
      console.error("Error entering app:", err);
      setError(err.message);
    }
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-100 text-red-700">
        Error: {error}
      </div>
    );
  }

  if (showLandingPage) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex flex-col justify-center items-center p-4">
        <h1 className="text-5xl font-bold text-white mb-6">
          Welcome to Speake
        </h1>
        <p className="text-xl text-white mb-8 text-center max-w-2xl">
          Unleash your voice in a decentralized world of citizen journalism,
          powered by blockchain technology.
        </p>
        <button
          onClick={handleEnterApp}
          className="px-8 py-3 bg-white text-indigo-600 rounded-full text-lg font-semibold hover:bg-indigo-100 transition duration-300"
        >
          Enter Speake
        </button>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-20 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Free Speech
            </h3>
            <p className="text-white">
              Express yourself without censorship on our decentralized platform.
            </p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Earn Rewards
            </h3>
            <p className="text-white">
              Get rewarded with SPK tokens for your valuable contributions.
            </p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Shape the Future
            </h3>
            <p className="text-white">
              Participate in governance and guide the platform's evolution.
            </p>
          </div>
        </div>
      </div>
    );
  }

  console.log("Rendering SpeakeUI");
  return (
    <div className="App">
      <SpeakeUI />
    </div>
  );
}

export default App;
