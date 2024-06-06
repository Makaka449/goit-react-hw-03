export default function Options({ fun, cleaning, amount }) {

    function chooseGood() {
      const feedBack = "good";
      fun(feedBack);
    }

    function chooseNeutral() {
      const feedBack = "neutral";
      fun(feedBack);
    }

    function chooseBad() {
      const feedBack = "bad";
      fun(feedBack);
    }

    function reseting() {
      cleaning();
    }
    
    return (
      <ul className="buttons">
        <li>
          <button value={"good"} onClick={chooseGood}>
            Good
          </button>
        </li>
        <li>
          <button value={"neutral"} onClick={chooseNeutral}>
            Neutral
          </button>
        </li>
        <li>
          <button value={"bad"} onClick={chooseBad}>
            Bad
          </button>
        </li>
        {amount != 0 && (
          <li>
            <button onClick={reseting}>Reset</button>
          </li>
        )}
      </ul>
    );
  }