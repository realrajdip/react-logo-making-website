import React, { useState } from "react";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import IconController from "./components/IconController";
import BackgroundController from "./components/BackgroundController";

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <Header />
      <div className="w-64 fixed">
        <SideNav selectedIndex={(val) => setSelectedIndex(val)} />
      </div>
      <div className="ml-64 grid grid-cols-1 md:grid-cols-6">
        <div className="md:col-span-2 border h-screen shadow-sm p-5">
        {(selectedIndex==0) ? <IconController /> : <BackgroundController />}
        </div>
        <div className="md:col-span-3">preview</div>
        <div className="">ad</div>
      </div>
    </>
  );
};

export default App;
