export default async function fetchProducts() {
	let allProducts = []

	const response = await fetch(
		"https://striveschool-api.herokuapp.com/api/product/",
		{
			headers: {
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMDlkOWIxZjBmYjAwMTVkOTE2ZmYiLCJpYXQiOjE2MjE1OTMxMjMsImV4cCI6MTYyMjgwMjcyM30.KH0U-5IdgCx5VNSAT2DjhGbThKvpTr_YrirAEcJEK-s",
			},
		}
	)
	const products = await response.json()
    return products
}