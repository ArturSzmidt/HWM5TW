import React, { Component } from "react"

export default class backOffice extends Component {
	state = {
		name: "",
		brand: "",
		imgUrl: "",
		price: "",
		description: "",
	}

	getName = (e) => {
		this.setState({ name: e.target.value })
		console.log(this.state)
	}
	getBrand = (e) => {
		this.setState({ brand: e.target.value })
		console.log(this.state)
	}
	getImgUrl = (e) => {
		this.setState({ imgUrl: e.target.value })
		console.log(this.state)
	}
	getPrice = (e) => {
		this.setState({ price: e.target.value })
		console.log(this.state)
	}
	getDescription = (e) => {
		this.setState({ description: e.target.value })
		console.log(this.state)
	}

	handleSubmit = async () => {
		const postProduct = {
			name: this.state.name,
			brand: this.state.brand,
			imgUrl: this.state.imgUrl,
			price: this.state.price,
			description: this.state.description,
		}
		try {
			const response = await fetch(
				"https://striveschool-api.herokuapp.com/api/product/",
				{
					method: "POST",
					body: JSON.stringify(postProduct),
					headers: {
						Authorization:
							"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMDlkOWIxZjBmYjAwMTVkOTE2ZmYiLCJpYXQiOjE2MjE1OTMxMjMsImV4cCI6MTYyMjgwMjcyM30.KH0U-5IdgCx5VNSAT2DjhGbThKvpTr_YrirAEcJEK-s",
					},
				}
			)
			const post = await response.json()
			console.log("success!" + post)
		} catch (error) {
			console.log("You have an error posting:", error)
		}
	}

	render() {
		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="col-4 mt-5 mx-auto">
							<h1>Backoffice</h1>
							<h2 id="h2" className="d-none text-muted">
								<em>(Editing Mode)</em>
							</h2>
							<form onsubmit="sumbitHandler(event)">
								<div className="form-group">
									<label htmlFor="productName">Name</label>
									<input
										type="text"
										className="form-control"
										id="productName"
										onChange={this.getName}
										required
									/>
								</div>
								<div className="form-group">
									<label htmlFor="brand">Brand</label>
									<input
										type="text"
										className="form-control"
										id="brand"
										onChange={this.getBrand}
										required
									/>
								</div>
								<div className="form-group">
									<label htmlFor="brand">Img Url</label>
									<input
										type="url"
										className="form-control"
										id="imgUrl"
										onChange={this.getImgUrl}
										required
									/>
								</div>
								<div className="form-group">
									<label htmlFor="price">Price</label>
									<input
										type="number"
										className="form-control"
										id="price"
										onChange={this.getPrice}
										required
									/>
									<small className="form-text ">
										<em> Price in dollars</em>
									</small>
								</div>
								<div className="form-group">
									<label htmlFor="description">Description</label>
									<textarea
										className="form-control"
										id="description"
										rows={3}
										required
										defaultValue={""}
										onChange={this.getDescription}
									/>
								</div>
								<span>
									<button
										type="button"
										className="btn btn-primary"
										onClick={this.handleSubmit}
									>
										Submit
									</button>
								</span>
								<span>
									<button
										type="button"
										onclick="deleteProduct()"
										className="btn btn-danger"
									>
										Delete
									</button>
								</span>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
