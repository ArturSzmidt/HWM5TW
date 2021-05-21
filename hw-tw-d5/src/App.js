import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import BackOffice from './components/BackOffice'
import Home from './components/Home'
// import NavBar from './components/navbar'


function App() {
	return (
		<Router basename="/">
			{/* <NavBar /> */}
			<Route path="/" exact component={Home} />
			<Route path="/backoffice" exact component={BackOffice} />
		</Router>
	)
}

export default App
