import React from 'react'
import Link from 'gatsby-link'
import Icon from '../components/icons'
let pathPrefix = `/`


const Sharemos = () => (
<div>
<div className="sharemos_bg">
    <div className="hero_project_title_block">
        <h1 className="project-title">sharemos.com</h1>
        <div className="skills_underline_orange"></div>
        <h3 className="project-title"> [ENG / SPANISH] Two-side marketplace.
Rent whatever you need from people like you. Wherever.</h3>
    </div>
    <div className="hero_project_img"><img src={require('../images/sharemos/case_sharemos_3.png')} alt="sharemos case study hero image"/>
  </div>
</div>
<div className="section">
<div className="row align-center padding5_top">

<div className="small-11 medium-9 columns padding5_top">

    <h3 className="project-title">Overview</h3>

    <p className="text-left content-project">
Sharemos is a two-side marketplace for people willing to rent any kind of item. Wherever. It was designed to be the airbnb of things. I am still working on this case study. Please come back in a few weeks !</p>


<div className="row align-center">


    <div className="small-11 medium-9 columns padding5_top">

             <h3 className="project-title padding10_top">UX methodology and deliverables</h3>
<ul className="no_bullet">
 <h4 className="project-title padding10_top">UX research</h4>
            <li className="checked">Business Context Analysis</li>
            <li className="checked">Service definition, context map</li>
            <li className="checked">Customer lean development</li>
            <li className="checked">Usability Engineering</li>
            <li className="checked">Primary research, testing</li>
            <li className="checked">UX Planning</li>
            <h5 className="project-title">Deliverables</h5> UX Brief, Experience Map, personas, engagement definitions, strategy, research
Information Architecture
<h4 className="project-title padding10_top">UX design</h4>
            <li className="checked">Interaction Design (IxD)</li>
            <li className="checked">Interaction Flows (IX)</li>
            <li className="checked">Prototype</li>
            <li className="checked">Visual and Information Design</li>
            <li className="checked">Design for internationalization</li> 
            </ul>
             <h5 className="project-title">Deliverables</h5>

                Branding, layout, graphics, style guide


- Value proposition
- Product Strategy
- Task analysis
- Product Roadmap
- Competitive Audit
- User Interview
- Concept Testing
- Field Study
- SWOT Analysis

<h3 className="project-title padding10_top">Front-end</h3>
<ul className="no_bullet">
            <li className="checked">Design integration in Rails environment</li>
            <li className="checked">Github</li>
            <li className="checked">CSS3 Sass, Compass, Susy Grids</li>
            <li className="checked">Focus on browser compatibility</li>
            <li className="checked">Coffeescript (basic)</li>
            <li className="checked">Responsive design</li>
            <li className="checked">Internationalization</li> 
    </ul>
<h4 className="project-title">Internationalization</h4>
We planned internationalization of the the product in the earliest phase of the design and development. This allowed a better scalability and a faster roll out. 
<img src={require('../images/sharemos/case_sharemos_2.png')} alt="sharemos case study hero image"/>
<p className="caption padding5_bottom">user flows</p>
<h3 className="project-title padding10_top">App design (Android)</h3>

<div className="row align-center">
<div className="small-4 medium-4 columns padding5_top">
<img src={require('../images/sharemos/sharemos_app_sample_floid.gif')} alt="sharemos case study hero image"/>
   
    <p className="caption padding5_bottom">Android App prototype</p>
</div> 
     
<div className="small-8 medium-8 columns padding5_top">
<ul className="no_bullet">
            <li className="checked">Users flows</li>
            <li className="checked">Users flows prototype (Marvel)</li>
            <li className="checked">App Book (for Dev Team validation)</li>
            <li className="checked">Interaction Design (IxD) (Pixate/Floid)</li>
            <li className="checked">Assets and follow-up</li>
       
    </ul>

    </div>

</div>

<h3 className="project-title padding10_top">Business</h3>
<ul className="no_bullet">
            <li className="checked">Product Roadmap Strategy</li>
            <li className="checked">Company Strategy</li>
            <li className="checked">Retention / Engagement Metrics</li>
            <li className="checked">Funnel Acquisition Metrics</li>
            <li className="checked">Revenue Model</li>
            <li className="checked">Resource Allocation</li>
            <li className="checked">Financial Metrucs</li> 
            <li className="checked">Communication</li> 
    </ul>
</div>   
</div>   
</div>   
</div> 



</div>
















<div className="white">
<div className="row align-center white padding15_bottom">
	<div className="small-11 columns padding10_top padding5_bottom">
	  <h2 className="">That's all, folks ! let's get in touch. </h2>
	                 <div className="skills_underline_orange"></div>
	                <p className="padding5_top">Let's create great experiences and make your project generate more revenue. I am currently available for projects in Europe.</p>
	                <p>Get in touch with me by filling the form below. You can also directly  <a href="https://calendly.com/uxpages/30min" target="_blank" rel="noopener" className="link_underlined"> schedule a call <span className="target_blank"></span></a></p>
	</div>
	<div className="small-11 medium-6 columns white">
		<form name="contact" id="contact-form" action="//formspree.io/hola@uxpages.com" method="post" className="topBefore padding5_top">
			<label for="email"><span className="label-form">What's your e-mail address?</span></label>
			<input id="email" type="email" name="Email" required/>
			 <label className="label-form padding5_top" for="message"><span>Message</span></label>
			<textarea id="message" className="" name="Message" cols="1" rows="6" required></textarea>

			<input className="is-hidden" type="text" name="_gotcha"/>
			<input type="hidden" name="_subject" value="Subject"/>
			<input type="hidden" name="_cc" value="email@cc.com"/>
			<input id="submit" className="submitBtn" type="submit" value="Send" onclick="track('Click-send-contact-form','Click-send-contact-form')"/>
		</form>
	</div>
<div className="small-11 medium-5 columns orange">
            <Link to="mailto:&#104;&#111;&#108;&#097;&#064;&#117;&#120;&#112;&#097;&#103;&#101;&#115;&#046;&#099;&#111;&#109;" className="email_footer">&#104;&#111;&#108;&#097;&#064;&#117;&#120;&#112;&#097;&#103;&#101;&#115;&#046;&#099;&#111;&#109;</Link>
<p></p>


<Link to="#" target="_blank" rel="noopener"><Icon name="svgicon-instagram"/></Link>
<Link to="https://github.com/Robespra" target="_blank" rel="noopener"><Icon name="svgicon-github"/></Link>

</div>
<div>
 <footer className="padding10_bottom">
    <div className="row large-unstack align-middle">
      <div className="column">
        <small>&copy; 2018 uxpages eirl</small>
      </div>
    </div>
</footer>
</div>


</div>
</div>

</div>






)




export default Sharemos