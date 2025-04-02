import React from "react";
import Whychooseus from "./why choose us/Whychooseus";

import Homepage from "./why choose us/home page/Homepage";
import Contact from "./why choose us/home page/Contact";
import Aboutus from "./why choose us/home page/Aboutus";

export default function App() {
  return (
    <div className="bg-gray-100">
      <Homepage/>
    <Whychooseus/>
    <Contact/>
    <Aboutus/>
    
    </div>
  );
}
