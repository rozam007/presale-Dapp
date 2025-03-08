import React from "react";

const Home = () => {
  const count = 10;
  console.log("count: ", count);
  return (
    <section className="w-full h-full bg">
      <h1 className="text-black">Welcome!</h1>
      <p>Current count: {count}</p>
    </section>
  );
};

export default Home;
