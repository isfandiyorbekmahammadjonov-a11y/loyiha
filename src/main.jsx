import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CreatPostsContext } from "./components/context/AdminCreatPostsContext.jsx";
import { UpdatePostsContext } from "./components/context/AdminUpdatePost.jsx";
createRoot(document.getElementById("root")).render(
  <CreatPostsContext>
    <UpdatePostsContext>
      <App />
    </UpdatePostsContext>
  </CreatPostsContext>,
);
