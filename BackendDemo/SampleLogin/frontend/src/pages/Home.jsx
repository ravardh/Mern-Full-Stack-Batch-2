import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold text-blue-700 mb-4">
        Welcome to My React Site
      </h1>
      <p className="text-lg text-gray-700 text-center max-w-xl">
        This is a simple homepage built using React and styled with Tailwind
        CSS. You can use it as a starting point for your own project.
      </p>
    </div>
  );
};

export default Home;
