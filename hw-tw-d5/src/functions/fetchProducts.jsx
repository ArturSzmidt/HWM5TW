export default async function fetchProducts() {
  let allProducts = [];

  // const response = await fetch(
  //   'https://striveschool-api.herokuapp.com/api/product/',
  //   {
  //     headers: {
  //       Authorization:
  //         'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMDlkOWIxZjBmYjAwMTVkOTE2ZmYiLCJpYXQiOjE2MjE1OTMxMjMsImV4cCI6MTYyMjgwMjcyM30.KH0U-5IdgCx5VNSAT2DjhGbThKvpTr_YrirAEcJEK-s',
  //     },
  //   }
  // );
  const response = await fetch('http://localhost:3001/products');
  const products = await response.json();
  products.forEach((product) => {
    allProducts.push(product);
  });
  return products;
}
