import React, { Component } from 'react';
export default class Main extends Component {
	render() {
		return (
			<React.Fragment>
				{/* <!-- Main --> */}
				<div id="main">

					{/* <!-- Featured Post --> */}
					<article class="post featured">
						<header class="major">

							<h2><a href="#">my projects<br />
							</a></h2>
							<p></p>
						</header>
					</article>
					{/* <!-- Posts --> */}
					<section class="posts">
						<article>
							<header>
								<h2><a href="#">E-Commerce Store Single Vendor-Bakery<br />
								</a></h2>
							</header>
							<a href="https://e-commerce-vanilla-js-seven.vercel.app/" class="image fit"><img src="images/bake-land.png" alt="" /></a>
							<p>A Web-app from where customers can buy and order bakery items like cakes, pastries, savoury and much more. You can add your products and add them to cart to order.</p>
							<ul class="actions special">
								<li><a href="https://github.com/mayank1-0/E-Commerce_VanillaJS" class="button">Code</a></li>
							</ul>
						</article>
						<article>
							<header>
								<h2><a href="#">Job Portal<br />
								</a></h2>
							</header>
							<a href="https://job-portal1-1738.onrender.com/" class="image fit"><img src="images/myapp3.png" alt="" /></a>
							<p>A job portal for tracking the hirings of applicants and also tracking stats of employees</p>
							<ul class="actions special">
								<li><a href="https://github.com/mayank1-0/myapp3" class="button">Code</a></li>
							</ul>
						</article>
						<article>
							<header>
								<h2><a href="#">ARISE<br />
								</a></h2>
							</header>
							<a href="https://arise-express-react.onrender.com/api-docs/" class="image fit"><img src="images/Arise.png" alt="Arise" /></a>
							<p>ARISE is an educational institute for teaching undergraduates and graduates computer skills for example Tally, Python etc.</p>
							<ul class="actions special">
								<li><a href="https://github.com/mayank1-0/ARISE-Express-React" class="button">Code</a></li>
							</ul>
						</article>
						<article>
							<header>
								<h2><a href="#">Rohenii<br />
								</a></h2>
							</header>
							<a href="https://rohenii-send.vercel.app/" class="image fit"><img src="images/rohenii.png" alt="Rohenii" /></a>
							<p>Rohenii A portal for managing interaction between Hospitals, Insurance Companies and TPAs( Third party administrators ) for working compatability and marking which hospitals to work with and which hospitals to not work with by TPAs and Insurance Companies</p>
							<ul class="actions special">
								<li><label>Private Repository</label></li>
							</ul>
						</article>
						<article>
							<header>
								<h2><a href="#">Weather Search<br />
								</a></h2>
							</header>
							<a href="https://weather-search-weld.vercel.app/" class="image fit"><img src="images/weather_search.png" alt="" /></a>
							<p>An app for searching the latitude, longitude and temprature of a location. Just enter location name and click on Find button.</p>
							<ul class="actions special">
								<li><a href="https://github.com/mayank1-0/weather-search" class="button">Code</a></li>
							</ul>
						</article>
						<article>
							<header>
								<h2><a href="#">Movie Search<br />
								</a></h2>
							</header>
							<a href="https://movie-search-indol-eight.vercel.app/" class="image fit"><img src="images/movie-search.png" alt="" /></a>
							<p>An app for searching movie details. Just enter movie-name and select the movie from the drop-down suggestions.</p>
							<ul class="actions special">
								<li><a href="https://github.com/mayank1-0/movie-search" class="button">Code</a></li>
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
