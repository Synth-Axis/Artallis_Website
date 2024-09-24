import "./counter.css";
import CountUp from "react-countup";

const Counter = (props) => {
  return (
    <div className="counter">
      <CountUp end={props.value} />
      <div>{props.text}</div>
    </div>
  );
};

export default Counter;
