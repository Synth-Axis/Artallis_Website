import "./counter.css";
import CountUp from "react-countup";

const Counter = ({ text, value }) => {
  return (
    <div className="counter">
      <CountUp end={value} />
      <div>{text}</div>
    </div>
  );
};

export default Counter;
