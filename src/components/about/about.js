import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="about" className="s-about target-section">
        {/* <!-- Intro --> */}
					<div id="intro"> 
						<h2>Hello. I am Mayank <br />
						</h2>
						<p>I develop web-apps
						</p>
						<ul class="actions">
							<li><a class="button icon solid solo fa-arrow-down scrolly">Continue</a></li>
						</ul>
					</div>
        </section>
        <header id="home">
          ....
        </header>
      </React.Fragment>
    );
  }
}
