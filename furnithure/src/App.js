import React from "react";

import Exrecise from "./Teda/Exrecise";
import Whychooseus from "./why choose us/Whychooseus";

export default function App() {
  return (
    <div className="bg-slate-600 px-20">
      <header>
        <ul>
          <li className="text-2xl text-center font-bold">Furniture Store</li>
          <li className="text-lg text-center">kale sera edi</li>
          <li className="text-lg text-center">
            Explore our collection of stylish and modern furniture.
          </li>
          <li className="text-lg text-center h-10">
            Shop now and transform your space!
          </li>
        </ul>
      </header>

      <div>
        <Exrecise />
      </div>
      <Whychooseus />
    </div>
  );
}
