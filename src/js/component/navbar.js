import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				<div className="row">
					<div className="col-l-2 col-sm-4 col-md-2 col-xs-4">
						<Link to="/">
						<div className="navbar-brand mb-0 h1">
						
						
						<img src="https://www.drawingwars.com/assets/img/cartoons/how-to-draw-the-star-wars-logo-step-by-step/how-to-draw-the-star-wars-logo-step-by-step_transparent.png?ezimgfmt=ng%3Awebp%2Fngcb1" className="img-fluid" style={{"width": "60%", "height": "60%"}} alt="Responsive image"/>
						
			
							</div>
							</Link>
					</div>
					<div className="col-8 col-sm-4 col-md-8 col-xs-4"></div>
					
					<div className="col-2 col-sm-4 col-md-2 col-xs-4">
							<div className="ml-auto pt-3">
							<Link to="/demo">
							<button className="btn btn-primary">Favorites</button>
							</Link>
							</div>
					</div>
				</div>
</div>
			
			
			
			
		</nav>
	);
};
