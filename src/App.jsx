import { Login, Chats, Edit, Preview } from "./Index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="font-nunito">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/chats" element={<Chats />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/preview" element={<Preview />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
