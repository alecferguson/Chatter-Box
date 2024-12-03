import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage.jsx";
import LoginPage from "./pages/auth/login/LoginPage.jsx";
import SignUpPage from "./pages/auth/signup/SignUpPage.jsx";
import Sidebar from "./components/common/Sidebar.jsx";
import RightPanel from "./components/common/RightPanel.jsx";
import NotificationPage from "./pages/notification/NotificationPage.jsx";
import ProfilePage from "./pages/profile/ProfilePage.jsx";
import { Toaster } from "react-hot-toast"; 

function App() {
  const { data:authUser, isLoading} = useQuery({
    //we use queryKey to give a unique name to our query and refer to it later
    queryKey: ["authUser"],
    queryFn: async() => {
      try {
        const res = await fetch("/api/auth/me");
        const data = await res.json();
        if(data.error) {
          return null; 
        }
        if(!res.ok) {
          throw new Error(data.error || "Something went wrong")
        }
        console.log("authUser is here:", data); 
        return data;

      } catch (error) {

      }
    },
    retry:false,
  });

  if(isLoading) {
    return (
      <div className = 'h=screen flex justify-center items-center'>
        <LoadingSpinner size = 'lg' />
      </div>
    )
  }

  return (
    <div className="flex max-w-6xl mx-auto">
      <Sidebar />
      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to='/login' />} />
        <Route path="/signup" element={!authuser ? <SignUpPage /> : <Navigate to='/' />} />
        <Route path="/login" element={!authuser ? <LoginPage /> : <Navigate to='/' />} />
        <Route path="/notifications" element={authUser ? <NotificationPage /> : <Navigate to='/login' />} />
        <Route path="/profile/:username" element={authUser ? <ProfilePage /> : <Navigate to='/login' />} />
      </Routes>
      <RightPanel />
      <Toaster />
    </div>
  );
};

export default App;