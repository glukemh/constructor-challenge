import React, { useState } from "react";
import axios from "axios";

function Search(props) {
	const [search, setSearch] = useState("");

	const handleSearch = async () => {
		const results = await axios.get(
			`https://ac.cnstrc.com/search/${search}?key=key_fygjntHGW7usvxC8`
		);
		props.updateResults(results.data.response.results);
	};

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	return (
		<div>
			<input
				type="text"
				value={search}
				onChange={handleChange}
				placeholder="Search"
			/>
			<button onClick={handleSearch}>Search</button>
		</div>
	);
}

export default Search;
