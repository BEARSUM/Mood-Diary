import { RouterProvider } from "react-router-dom";
import router from "./routes/routing";

// import { ThemeProvider } from "styled-components";
// import theme from "./styles/theme";

// import GlobalStyles from "./styles/global";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
