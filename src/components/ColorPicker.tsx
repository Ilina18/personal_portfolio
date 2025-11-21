import React, { useState } from "react";
import { ChromePicker, ColorResult } from "react-color";

export default function ColorPicker() {
  const [color, setColor] = useState("#ff9f1c");

  return (
    <div className="pt-8">
      <h2 className="text-2xl font-bold mb-4 text-white">Pick a Color!</h2>

      <ChromePicker
        color={color}
        onChangeComplete={(newColor: ColorResult) => setColor(newColor.hex)}
      />

      <div
        className="mt-4 p-4 rounded shadow text-white font-bold"
        style={{ backgroundColor: color }}
      >
        This box changes color!
      </div>
    </div>
  );
}
