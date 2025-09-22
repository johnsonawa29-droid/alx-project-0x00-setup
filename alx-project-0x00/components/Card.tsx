
import React from "react";
import Pill from "./pill";

const Card: React.FC = () => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <h2 className="text-lg font-semibold mb-2">Card Component</h2>
      <div className="flex gap-2">
        <Pill title="First Pill" />
        <Pill title="Second Pill" />
        <Pill title="Third Pill" />
      </div>
    </div>
  );
};

export default Card;
