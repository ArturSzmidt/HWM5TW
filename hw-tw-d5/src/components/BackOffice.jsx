import React, { Component } from "react"

export default class backOffice extends Component {
	state = {
		isLoading: false,
		name: "",
		brand: "",
		price: "",
		description: "",
		category: "",
		file: "",
		imgUrl: "",
	}

	getName = (e) => {
		this.setState({ name: e.target.value })
	}
	getBrand = (e) => {
		this.setState({ brand: e.target.value })
	}
	getPrice = (e) => {``
		this.setState({ price: e.target.value })
	}
	getDescription = (e) => {
		this.setState({ description: e.target.value })
	}
	getCategory = (e) => {
		this.setState({ category: e.target.value })
	}
	getFile = (e) => {
		this.setState({ file: e.target.files[0] })
	}

	handleSubmit = async () => {
		const postProduct = {
			name: this.state.name,
			brand: this.state.brand,
			price: this.state.price,
			description: this.state.description,
			category: this.state.category,
		}
		try {
			console.log(postProduct)
			const response = await fetch("http://localhost:3001/products/", {
				method: "POST",
				body: JSON.stringify(postProduct),
				headers: {
					"Content-Type": "application/json",
				},
			})

			if (response.ok) {	
				//  here it checks if there is an image , if image = true then it posts it
				console.log("state.file", this.state.file)
				if (this.state.file) {
					let data = await response.json()
					let id = data["_id"]
					console.log("here id", id)
					var formdata = new FormData()
					formdata.append("productImg", this.state.file)
					try {
						let res = await fetch(
							"http://localhost:3001/product/" + id + "/upload",
							{
								method: "POST",
								body: formdata,
							}
						)
						if (res.ok) {
							let file = await res.json()
							this.setState({ imgUrl: file.imageUrl })
							alert("Your Post has been saved!!")
						} else {
							alert("There is an error ", res.status)
						}
					} catch (error) {
						alert("error")
					}
				}
			} else {
				this.setState({ isLoading: false })
				alert("Something happened :/", response.status)
			}
		} catch (error) {
			alert("FINAL CATCH",error)
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
									<label htmlFor="category">Category</label>
									<input
										type="text"
										className="form-control"
										id="category"
										onChange={this.getCategory}
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
									<label htmlFor="Photo">Photo</label>
									<input
										type="file"
										className="form-control"
										id="file"
										onChange={this.getFile}
									/>
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
