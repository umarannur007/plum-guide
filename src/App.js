import React from "react";
import Navigation from "./Layout/Navigation";
import Booking from "./Components/Booking";
import Apartment from "./Page/Apartment";


function App() {
  return (
    <div className="App">
      <Navigation />
      <Booking />
      <Apartment />
    </div>
  );
}

export default App;
