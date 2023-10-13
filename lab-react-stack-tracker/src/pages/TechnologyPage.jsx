import { useParams, useNavigate, useSearchParams } from "react-router-dom"

function TechnologyPage({ technologies }) {
	const [searchParams, setSearchParams] = useSearchParams()

	const previousCompany = searchParams.get("toto")
	console.log(previousCompany)
	const { techSlug } = useParams()
	const navigate = useNavigate()
	const technology = technologies.find((tech) => tech.slug === techSlug)
	return (
		<div>
			<h1>{technology.name}</h1>
			<p>{technology.description}</p>
			<img src={technology.image} style={{ width: "5rem" }} alt="" />
			<div>
				<button
					onClick={() =>
						navigate(previousCompany ? `/company/${previousCompany}` : -1)
					}>
					Back
				</button>
			</div>
		</div>
	)
}

export default TechnologyPage
