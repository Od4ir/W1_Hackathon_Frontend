import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Chat from "./components/chat/Chat"
import AdminExtractPage from "./components/admin/AdminPage"

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/admin" element={<AdminExtractPage />} />
          </Routes>
      </Router>
  )
}

export default App
