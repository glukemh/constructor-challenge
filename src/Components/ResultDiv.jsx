import React, { useEffect, useState } from "react";
import axios from "axios";

function ResultDiv(props) {
	const [result, setResult] = useState([]);

	useEffect(() => {
		const getResults = async () => {
			const results = await axios.get(
				"https://ac.cnstrc.com/search/apple?key=key_fygjntHGW7usvxC8"
			);
			setResult(results.data.response.results);
		};
		getResults();
	}, []);

	return (
		<div>
			{props.results.length
				? props.results.map((item) => {
						return (
							<div class="container">
								<div class="row">
									<img
										src={item.data.image_url}
										width="50px"
										height="50px"
										alt=""
									/>
									<div class="value">{item.value}</div>
								</div>
							</div>
						);
				  })
				: result.map((item) => {
						return (
							<div class="container">
								<div class="row">
									<img
										src={item.data.image_url}
										width="50px"
										height="50px"
										alt=""
									/>
									<div class="value">{item.value}</div>
								</div>
							</div>
						);
				  })}
		</div>
	);
}

export default ResultDiv;
