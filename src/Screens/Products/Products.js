import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Products.css";

import { CardCom } from "../../components/Card/Card";
import Shoes from "../../data";

export const Product = () => {
	return (
		<div className="headerWrapper">
			<Container className="productsWrapper mx-0">
				<Row className="py-5">
					{Shoes.map((shoe, ind) => {
						// let shoe = Shoes[key];
						// console.log(Shoes);
						return (
							<Col md={6} lg={4} key={ind}>
								<Link to={`/product/${shoe.id}`} className="navLink">
									<CardCom product={shoe} />
								</Link>
							</Col>
						);
					})}
				</Row>
			</Container>
		</div>
	);
};
