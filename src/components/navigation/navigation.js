import React, { Component } from 'react';
export default class Navigation extends Component {
  render() {
    return (
      <React.Fragment>
          {/* <!-- Nav --> */}
				    <nav id="nav">
						<ul className="links">
							{/* <li className="active"><a href="index.html"></a></li> */}
							<li></li>
							<li></li>
						</ul>
						<ul className="icons">
							<li></li>
							<li></li>
							{/* <li><a href="http://linkedin.com/in/mayank-610506112" className="icon brands fa-linkedin"><span className="label">LinkedIn</span></a></li> */}
							<li><a href="https://github.com/mayank1-0" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
						</ul>
					</nav>
        <header id="home">
          ....
        </header>
      </React.Fragment>
    );
  }
}
