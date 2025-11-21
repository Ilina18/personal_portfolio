import React, { useState } from "react";

import { ChromePicker } from "react-color"; // import the color picker

export default function ColorPicker() {
  const [color, setColor] = useState("#ff9f1c"); // default color

  return (
    <div className="pt-8">
      <h2 className="text-2xl font-bold mb-4 text-white">Pick a Color!</h2>

      {/* Color picker UI */}
      <ChromePicker
        color={color}
        onChangeComplete={(newColor) => setColor(newColor.hex)}
      />

      {/* Display selected color */}
      <div
        className="mt-4 p-4 rounded shadow text-white font-bold"
        style={{ backgroundColor: color }}
      >
        This box changes color!
      </div>
    </div>
  );
}
