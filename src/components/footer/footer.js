import React, { Component } from 'react';
export default class Footer extends Component {
	render() {
		return (
			<React.Fragment>
				<footer id="footer">
					<section>
						<h3>Email</h3>
						<p><a href="#">bablata48@gmail.com</a></p>
					</section>
					<section>
						<form method="post" action="mailto:bablata48@gmail.com">
							{/* <div class="fields">
									<div class="field">
										<label for="name">Name</label>
										<input type="text" name="name" id="name" />
									</div>
									<div class="field">
										<label for="email">Email</label>
										<input type="text" name="email" id="email" />
									</div>
									<div class="field">
										<label for="message">Message</label>
										<textarea name="message" id="message" rows="3"></textarea>
									</div>
								</div> */}
							<ul class="actions">
								<li><input type="submit" value="Send Mail" /></li>
							</ul>
						</form>
					</section>

					<section>
						<h3>Social</h3>
						<ul class="icons alt">
							{/* <li><a href="http://linkedin.com/in/mayank-610506112" class="icon brands alt fa-linkedin"><span class="label">LinkedIn</span></a></li> */}

							<li><a href="https://github.com/mayank1-0" class="icon brands alt fa-github"><span class="label">GitHub</span></a></li>
						</ul>
					</section>
				</footer>
				<header id="home">
					....
				</header>
			</React.Fragment>
		);
	}
}
