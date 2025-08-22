// Import React's StrictMode for additional development checks
import { StrictMode } from "react";
// Import createRoot for React 18's concurrent rendering features
import { createRoot } from "react-dom/client";
// Import global styles
import "./index.css";
import ToggleSwitch from "./projects/ToggleSwitch/ToggleSwitch";
// Other components are commented out but available to switch between examples
// import LiftingStateUp from "./LiftingStateUp";
// import { DerivedState } from "./DerivedState";
// import { State } from "./hooks/State";
// import App from './App.jsx'

// Create a root for our React application and render it
// Using createRoot (React 18+) instead of legacy ReactDOM.render
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <State /> */}
    {/* <DerivedState /> */}
    {/* <LiftingStateUp /> */}
    <ToggleSwitch />
  </StrictMode>
);
