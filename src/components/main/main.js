import React, { Component } from 'react';
export default class Main extends Component {
	render() {
		return (
			<React.Fragment>
				{/* <!-- Main --> */}
				<div id="main">

					{/* <!-- Featured Post --> */}
					<article className="post featured">
						<header className="major">

							<h2>my projects<br /></h2>
							<p></p>
						</header>
					</article>
					{/* <!-- Posts --> */}
					<section className="posts">
						<article>
							<header>
								<h2><a href="https://e-commerce-vanilla-js-seven.vercel.app/">E-Commerce Store Single Vendor-Bakery<br />
								</a></h2>
							</header>
							<a href="https://e-commerce-vanilla-js-seven.vercel.app/" className="image fit"><img src="images/bake-land.png" alt="" /></a>
							<p>A Web-app from where customers can buy and order bakery items like cakes, pastries, savoury and much more. You can add your products and add them to cart to order.</p>
							<ul className="actions special">
								<li><a href="https://github.com/mayank1-0/E-Commerce_VanillaJS" className="button">Code</a></li>
							</ul>
						</article>
						<article>
							<header>
								<h2><a href="https://job-portal1-1738.onrender.com/">Job Portal<br />
								</a></h2>
							</header>
							<a href="https://job-portal1-1738.onrender.com/" className="image fit"><img src="images/myapp3.png" alt="" /></a>
							<p>A job portal for tracking the hirings of applicants and also tracking stats of employees</p>
							<ul className="actions special">
								<li><a href="https://github.com/mayank1-0/myapp3" className="button">Code</a></li>
							</ul>
						</article>
						<article>
							<header>
								<h2><a href="https://arise-express-react.onrender.com/api-docs/">ARISE<br />
								</a></h2>
							</header>
							<a href="https://arise-express-react.onrender.com/api-docs/" className="image fit"><img src="images/Arise.png" alt="Arise" /></a>
							<p>ARISE is an educational institute for teaching undergraduates and graduates computer skills for example Tally, Python etc.</p>
							<ul className="actions special">
								<li><a href="https://github.com/mayank1-0/ARISE-Express-React" className="button">Code</a></li>
							</ul>
						</article>
						<article>
							<header>
								<h2><a href="https://rohenii-send.vercel.app/">Rohenii<br />
								</a></h2>
							</header>
							<a href="https://rohenii-send.vercel.app/" className="image fit"><img src="images/rohenii.png" alt="" /></a>
							<p>Rohenii A portal for managing interaction between Hospitals, Insurance Companies and TPAs( Third party administrators ) for working compatability and marking which hospitals to work with and which hospitals to not work with by TPAs and Insurance Companies</p>
							<ul className="actions special">
								<li><label>Private Repository</label></li>
							</ul>
						</article>
						<article>
							<header>
								<h2><a href="https://weather-search-weld.vercel.app/">Weather Search<br />
								</a></h2>
							</header>
							<a href="https://weather-search-weld.vercel.app/" className="image fit"><img src="images/weather_search.png" alt="" /></a>
							<p>An app for searching the latitude, longitude and temprature of a location. Just enter location name and click on Find button.</p>
							<ul className="actions special">
								<li><a href="https://github.com/mayank1-0/weather-search" className="button">Code</a></li>
							</ul>
						</article>
						<article>
							<header>
								<h2><a href="https://movie-search-indol-eight.vercel.app/">Movie Search<br />
								</a></h2>
							</header>
							<a href="https://movie-search-indol-eight.vercel.app/" className="image fit"><img src="images/movie-search.png" alt="" /></a>
							<p>An app for searching movie details. Just enter movie-name and select the movie from the drop-down suggestions.</p>
							<ul className="actions special">
								<li><a href="https://github.com/mayank1-0/movie-search" className="button">Code</a></li>
							</ul>
						</article>
					</section>
				</div>
				<header id="home">
					....
				</header>
			</React.Fragment>
		);
	}
}
