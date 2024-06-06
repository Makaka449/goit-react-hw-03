import { useState, useEffect } from "react";
import "./App.css";

import Description from "./components/description";
import Options from "./components/options";
import Feedback from "./components/feedback";
import Notification from "./components/notification"



function App() {
  const [thought, setThought] = useState(() => {
    const savedThought = window.localStorage.getItem("saved-thought");

    if (savedThought !== null) {
      return JSON.parse(savedThought);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("saved-thought", JSON.stringify(thought));
  }, [thought]);

  const totalFeedback = thought.good + thought.neutral + thought.bad;
  const PositiveFeedback = Math.round((thought.good / totalFeedback) * 100);

  function updateFeedback(feedbackType) {
    switch (feedbackType) {
      case "good":
        setThought({
          ...thought,
          good: thought.good + 1,
        });
        break;

      case "neutral":
        setThought({
          ...thought,
          neutral: thought.neutral + 1,
        });
        break;

      case "bad":
        setThought({
          ...thought,
          bad: thought.bad + 1,
        });
        break;
    }
  }

  function resetState() {
    setThought({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  return (
    <>
      <Description />
      <Options
        fun={updateFeedback}
        cleaning={resetState}
        amount={totalFeedback}
      />
      {totalFeedback == 0 && <Notification />}
      {totalFeedback != 0 && (
        <Feedback
          obj={thought}
          amount={totalFeedback}
          statProc={PositiveFeedback}
        />
      )}
    </>
  );
}

export default App;