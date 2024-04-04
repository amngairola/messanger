import { Login } from "./Index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="font-nunito">
      <Router>
        {/* <AuthProvider> */}
        <Routes>
          {/* <Route path="/chats" component={Chats} />*/}
          <Route path="/" element={<Login />} />
        </Routes>
        {/* </AuthProvider> */}
      </Router>
    </div>
  );
}

export default App;
