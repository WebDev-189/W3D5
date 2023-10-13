import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
function CompanyPage({ companies }) {
	const { companySlug } = useParams()
	const oneCompany = companies.find((comp) => comp.slug === companySlug)
	console.log(oneCompany)
	return (
		<div>
			<h1>{oneCompany.name}</h1>
			<p>{oneCompany.description}</p>
			<div>
				{oneCompany.techStack.map((oneTech) => {
					return (
						<div key={oneTech.slug}>
							<Link to={`/tech/${oneTech.slug}?toto=${companySlug}`}>
								{oneTech.name}
							</Link>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default CompanyPage
