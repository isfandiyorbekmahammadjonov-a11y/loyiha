import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CreatPostsContext } from "./components/context/AdminCreatPostsContext.jsx";
createRoot(document.getElementById("root")).render(
  <CreatPostsContext>
    <App />
  </CreatPostsContext>,
);
