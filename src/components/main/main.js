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
									
									<h2><a href="#">my projects<br/>
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
		
										<h2><a href="#">Job Portal<br />
										</a></h2>
									</header>
									<a href="https://github.com/mayank1-0/myapp3" class="image fit"><img src="images/myapp3.png" alt="" /></a>
									<p>A job portal for tracking the hirings of applicants and also tracking stats of employees</p>
									<ul class="actions special">
										<li><a href="https://github.com/mayank1-0/myapp3" class="button">Code</a></li>
									</ul>
								</article>
                                <article>
									<header>
	
										<h2><a href="#">FB Phishing Page<br />
										</a></h2>
									</header>
									<a href="https://github.com/mayank1-0/FBPhishing" class="image fit"><img src="images/FBPhishing.png" alt="" /></a>
									<p>A spoof facebook login page where the entered credentials are stored in a text file and the user is redirected to the actual facebook login page 
										</p>
									<ul class="actions special">
										<li><a href="https://github.com/mayank1-0/FBPhishing" class="button">Code</a></li>
									</ul>
								</article>
                                <article>
									<header>
										
										<h2><a href="#">Bank Management System<br />
										</a></h2>
									</header>
									<a href="https://github.com/mayank1-0/bankingsystem1" class="image fit"><img src="images/BankingSystem1.png" alt="" /></a>
									<p>-A banking portal through which people can create account, login, do transactions, etc and also for bank employees to manage the customer data
										</p>
									<ul class="actions special">
										<li><a href="https://github.com/mayank1-0/bankingsystem1" class="button">Code</a></li>
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
