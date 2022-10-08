import { Toaster } from "react-hot-toast";
import { Application } from "./routes/mainRotes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Toaster position="top-right" reverseOrder={false} />
      <Application />
    </>
  );
}

export default App;
