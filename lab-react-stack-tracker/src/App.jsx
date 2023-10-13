import "./App.css"
import { useState } from "react"
import techData from "./technologies.json"
import companiesData from "./companies.json"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CompanyPage from "./pages/CompanyPage"
import TechnologyPage from "./pages/TechnologyPage"
import Navbar from "./components/Navbar"
function App() {
	const [companies, setCompanies] = useState(companiesData)
	const [technologies, setTechnologies] = useState(techData)
	return (
		<div className="App">
			<Navbar />
			<h1>LAB | React Stack Tracker</h1>

			<Routes>
				<Route path="/" element={<HomePage companies={companies} />} />
				<Route
					path="/company/:companySlug"
					element={<CompanyPage companies={companies} />}
				/>
				<Route
					path="/tech/:techSlug"
					element={<TechnologyPage technologies={technologies} />}
				/>
			</Routes>
		</div>
	)
}

export default App
