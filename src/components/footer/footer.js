import React, { Component } from 'react';
export default class Footer extends Component {
	render() {
		return (
			<React.Fragment>
				<footer id="footer">
					<section>
						<h3>Contact</h3>
						<p><a href="#">Email me or Direct Message me on LinkedIn</a></p>
					</section>
					<section>
						<form method="post" action="mailto:mayank.mehmi@gmail.com">
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
							<ul className="actions">
								<li><input type="submit" value="Send Mail" /></li>
							</ul>
						</form>
					</section>

					<section>
						<h3>Social</h3>
						<ul className="icons alt">
							<li><a href="http://linkedin.com/in/mayank-610506112" className="icon brands alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
							<li><a href="https://github.com/mayank1-0" className="icon brands alt fa-github"><span className="label">GitHub</span></a></li>
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
