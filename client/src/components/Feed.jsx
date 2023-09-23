import React, { useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import AudioRecorder from "./AudioRecorder";
import axios from "axios";

const Feed = () => {
  const [userInput, setUserInput] = useState("");
  const [myModel, setmyModel] = useState("");

  const [prediction, setPrediction] = useState("");

  const handleUserInput = (e) => {
    e.preventDefault();
    setUserInput(() => e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("clicked", userInput);
    handlePredict(userInput);
  };
  const handlePredict = async (userInput) => {
    // Prepare your input data
    const inputData = userInput;

    // Make a POST request to the Streamlit back-end
    const response = await axios.post("/predict", { data: inputData });

    // Update the UI with the predictions
    setPrediction(response.data);
    console.log(prediction)
  };
  return (
    <>
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
          Type & Let <br className="max-md:hidden" />
          <span className="orange_gradient">AI predict your sentiment</span>
        </h1>
        <p className="desc text-center">
          HackJs is an open-source AI prompting tool for modern world to
          discover, vent and share your expreiences to get the determine your
          feelings at this moment
        </p>
      </section>
      <section className="feed">
        <form className="relative min-w-full flex h-11" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Tell me how do you feel right now...."
            value={userInput}
            onChange={(e) => handleUserInput(e)}
            className="search_input peer focus:border-gray-200 flex-[3]"
            required
          />

          <button
            className="flex-1 bg-gradient-to-bl from-amber-500 via-orange-600 to-yellow-500 text-white rounded-tr-lg rounded-br-lg"
            type="submit"
          >
            Let's go
          </button>
        </form>
      </section>
    </>
  );
};

export default Feed;
