import React, { Component } from 'react';
export default class Navigation extends Component {
  render() {
    return (
      <React.Fragment>
          {/* <!-- Nav --> */}
				    <nav id="nav">
						<ul class="links">
							{/* <li class="active"><a href="index.html"></a></li> */}
							<li></li>
							<li></li>
						</ul>
						<ul class="icons">
							<li></li>
							<li></li>
							<li><a href="http://linkedin.com/in/mayank-610506112" class="icon brands fa-linkedin"><span class="label">LinkedIn</span></a></li>
							<li><a href="https://github.com/mayank1-0" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
						</ul>
					</nav>
        <header id="home">
          ....
        </header>
      </React.Fragment>
    );
  }
}
