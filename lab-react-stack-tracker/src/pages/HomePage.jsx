import { Link } from "react-router-dom"

function HomePage({ companies }) {
	return (
		<div>
			<ul>
				{companies.map((company) => {
					return (
						<li key={company.slug}>
							<Link to={`/company/${company.slug}`}>{company.name}</Link>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default HomePage
