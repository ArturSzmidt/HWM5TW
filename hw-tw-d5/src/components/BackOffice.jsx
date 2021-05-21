import React, { Component } from "react"

export default class backOffice extends Component {


	







	
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
										required
									/>
								</div>
								<div className="form-group">
									<label htmlFor="brand">Brand</label>
									<input
										type="text"
										className="form-control"
										id="brand"
										required
									/>
								</div>
								<div className="form-group">
									<label htmlFor="brand">Img Url</label>
									<input
										type="url"
										className="form-control"
										id="imgUrl"
										required
									/>
								</div>
								<div className="form-group">
									<label htmlFor="price">Price</label>
									<input
										type="number"
										className="form-control"
										id="price"
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
									/>
								</div>
								<span>
									<button type="submit" className="btn btn-primary">
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
