export default async function getProducts(searchQuery) {
  let results = []
		try {
			const res = await fetch(
				`${process.env.BACKEND_SERVER}/${searchQuery}`
			);
			const data = await res.json();
      results = data
		} catch (err) {
			console.log(err);
		}

  return results
}
