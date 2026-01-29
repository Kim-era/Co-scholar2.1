import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav_bar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Forum from "./pages/Forum";
import Library from "./pages/Library";
import Community from "./pages/Community";
import Teachers from "./pages/Teachers";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import TeacherDashboard from "./pages/TeacherDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import TeacherRoute from "./components/TeacherRoute";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
             <Route path="/library" element={<Library />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/Teachers" element={<Teachers />} />
            <Route path="/About" element={<About />} />  
           <Route path= "/SignIn" element={<SignIn />} />
            <Route path="/community" element={<Community />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/community" element={<ProtectedRoute><Community /></ProtectedRoute>}/>
            <Route path="/teacher-dashboard" element={<ProtectedRoute><TeacherRoute> <TeacherDashboard /></TeacherRoute></ProtectedRoute>
  }
/>

          </Routes>
        </main>
      </div>

      <Footer />
    </BrowserRouter>
  );
}
