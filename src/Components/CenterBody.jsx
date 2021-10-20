import React, { useState } from "react";
import ResultDiv from "./ResultDiv";
import Search from "./Search";

function CenterBody() {
	const [searchResults, setSearchResults] = useState([]);

	const updateResults = (results) => {
		setSearchResults(results);
	};

	return (
		<div>
			<div>
				<Search updateResults={updateResults} />
			</div>
			<div>
				<ResultDiv results={searchResults} />
			</div>
		</div>
	);
}

export default CenterBody;
