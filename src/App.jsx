import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./contexts/AuthContext";
import { Application } from "./routes/mainRotes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
      <AuthProvider>
          <Application />
      </AuthProvider>
    </>
  );
}

export default App;
