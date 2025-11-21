import React from "react";
import Typed from "react-typed";

export default function TypingEffect() {
  return (
    <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 p-4">
      <Typed
        strings={[
          "Hello, I'm Ilina!",
          "I love React.",
          "I build awesome portfolios.",
          "Welcome to my website!"
        ]}
        typeSpeed={50}
        backSpeed={30}
        loop
      />
    </div>
  );
}
