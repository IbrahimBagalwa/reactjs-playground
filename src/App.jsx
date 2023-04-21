import { useEffect, useState } from "react";

const BadFunction = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Bad stopping watch");
    setInterval(() => {
      setCount((v) => v + 0.1);
    }, 1000);
  }, []);
  return <div>BadStop watch: {count.toFixed(1)}</div>;
};

const GoodFunction = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Good stopping watch");
    const interval = setInterval(() => {
      setCount((v) => v + 0.1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <div>Good stop watch: {count.toFixed(1)}</div>;
};
function App() {
  return (
    <div className="grid grid-cols-2">
      <GoodFunction />
      <BadFunction />
    </div>
  );
}

export default App;
