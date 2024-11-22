import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage.jsx"
import LoginPage from "./pages/auth/login/LoginPage.jsx"
import SignUpPage from "./pages/auth/signup/SignUpPage.jsx"

function App() {
	return (
		<div className='flex max-w-6xl mx-auto'>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/signup' element={<SignUpPage />} />
				<Route path='/login' element={<LoginPage />} />
			</Routes>
		</div>
	);
}

export default App