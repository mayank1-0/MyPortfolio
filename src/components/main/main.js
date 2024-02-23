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
						{/* <a href="#" class="image main"><img src="images/pic01.jpg" alt="" /></a>
								<ul class="actions special">
									<li><a href="#" class="button large">Check it out</a></li>
								</ul> */}
					</article>
					{/* <!-- Posts --> */}
					<section class="posts">
						<article>
							<header>
								<h2><a href="#">E-Commerce Store Single Vendor-Bakery<br />
								</a></h2>
							</header>
							<a href="https://my-repository-2mcbj05zj-mayank1-0s-projects.vercel.app/" class="image fit"><img src="images/bake-land.png" alt="" /></a>
							<p>A Web-app from where customers can buy and order bakery items like cakes, pastries, savoury and much more. You can add your products and add them to cart to order.</p>
							<ul class="actions special">
								<li><label>Private Repository</label></li>
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
								<h2><a href="#">Robot Reviews<br />
								</a></h2>
							</header>
							<a href="https://ba9663.wpcomstaging.com/" class="image fit"><img src="images/RobotReviews.png" alt="Robot Reviews" /></a>
							<p>A web-site where you can find reviews of various robots. <br />A Wordpress project made using Elementor plugin.<br /></p>
							<ul class="actions special">
								<li><label>No code (Wordpress project)</label></li>
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
