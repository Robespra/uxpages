import React from 'react'
import {Helmet} from "react-helmet";
import PageTransition from 'gatsby-plugin-page-transitions'
import { Link } from "gatsby"
import InteracVid from '../images/meka/interaction_meka.mp4'
import Header from '../components/header'
import Footer from '../components/footer'
let pathPrefix = `/`



export default () => (
    <PageTransition>
<div>
<Helmet>
      <meta charSet="utf-8" />
      <title>uxpages - Product Design From Discovery To Delivery</title>
      <meta name="description" content="I have been designing digital products and providing guidance to organizations for more than 10 years. Product design is not an art guided solely by creativity and intuition : I do believe in lean customer development and metrics."/>
      <link rel="canonical" href="https://uxpages.com" />
    </Helmet>

<Header/>

<div className="row align-middle hero_block">
	<div className="small-12 medium-6 columns hero_pctre">
		<img src={require('../images/z3.jpg')} alt="pages charly espra jeremy robertttt aqui está?"/>
	</div>
	<div className="small-12 medium-6 columns">
	    <h1 className="hidden-h1">uxpages ux pages</h1>
	    <h2 className="hero_line">Hi! 👋 Good to have you here </h2>

    </div>
</div>

<div id="recent_work" className="row align-center">
    <div className="small-11 columns index-prjct ">
        <div className="row">
            <div className="small-12 columns dtls-text">
            <h2>How can I help you ?</h2>
            <div className="skills_underline_orange"></div>
        <h3>I have been designing <span className="skills_highlight">digital products </span>from discovery to delivery and <span className="skills_highlight">providing guidance to organizations</span> for more than <span className="skills_highlight">10 years.</span> 
        </h3>
               
        
            </div>
            
            <div className="index_case_study_btn">

                    <Link className="project__item-btn gradient_effect" to="/case_studies/" onclick="track('Click-see-project-convy','Click-see-project-convy')">See all case studies</Link>  
     
            </div>
        </div>
    </div>
</div>



<div id="skills" className="row align-center padding5_top">
    <div className="small-11 columns">
        <div className="row align-left">
        <div className="small-5 columns border-skills"></div>
        <div className="small-5 columns"></div>
        <div className="small-11 columns">
        <h2 className="padding5_top">Areas of expertise</h2>
        </div>
        </div>
        <div className="row align-left padding5_both">
        <div className="small-11 medium-2 large-1 columns">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-notebook" width="52" height="52" viewBox="0 0 24 24" stroke-width="0.5" stroke="#faad2a" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z"/>
  <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
  <line x1="13" y1="8" x2="15" y2="8" />
  <line x1="13" y1="12" x2="15" y2="12" />
</svg>
            </div>
            <div className="small-11 medium-9 large-5 columns">
                <h4>Research</h4>
                <div className="skills_underline_orange"></div>
                <ul className="no_bullet">
                <li className="checked">Focus group/itw</li>
                <li className="checked">Usability studies</li>
                <li className="checked">Heuristic review</li>
                <li className="checked">Empathy mapping</li>
                <li className="checked">Storyboard</li>
                <li className="checked">Benchmarking</li>
                <li className="checked">Moodboard</li>
                 <li className="checked">Quantitative UX research</li>
                </ul>
            </div>
            <div className="small-11 medium-2 large-1 columns">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-artboard" width="52" height="52" viewBox="0 0 24 24" stroke-width="0.5" stroke="#faad2a" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z"/>
  <rect x="8" y="8" width="8" height="8" rx="1" />
  <line x1="3" y1="8" x2="4" y2="8" />
  <line x1="3" y1="16" x2="4" y2="16" />
  <line x1="8" y1="3" x2="8" y2="4" />
  <line x1="16" y1="3" x2="16" y2="4" />
  <line x1="20" y1="8" x2="21" y2="8" />
  <line x1="20" y1="16" x2="21" y2="16" />
  <line x1="8" y1="20" x2="8" y2="21" />
  <line x1="16" y1="20" x2="16" y2="21" />
</svg>
            </div>
            <div className="small-11 medium-9 large-5 columns">
                <h4>Ideation</h4>
                <div className="skills_underline_orange"></div>
                <ul className="no_bullet">
                <li className="checked">Information architecture</li>
                <li className="checked">Personas, empathy maps...</li>
                <li className="checked">Storytelling / user journey</li>
                <li className="checked">Wireframes</li>
                <li className="checked">Interactive prototyping</li>
                <li className="checked">Art direction / branding</li>
                <li className="checked">Holistic & multidisciplinary approach</li>
                <li className="checked">Tools: Figma, FramerX, Storybook, HTML, CSS & JS, Proto Pie(IxD)</li>
                </ul>
            </div>
            <div className="small-11 medium-2 large-1 columns padding5_top">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-target" width="52" height="52" viewBox="0 0 24 24" stroke-width="0.5" stroke="#faad2a" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z"/>
  <circle cx="12" cy="12" r="1" />
  <circle cx="12" cy="12" r="5" />
  <circle cx="12" cy="12" r="9" />
</svg>
            </div>
            <div className="small-11 medium-9 large-5 columns padding5_top">
                <h4>Design for business</h4>
                <div className="skills_underline_orange"></div>
                <ul className="no_bullet">
                <li className="checked">Conversion of kpis into design strategy</li>
                <li className="checked">Behaviour design</li>
                <li className="checked">Data analysis</li>
                <li className="checked">Conversion optimization design</li>
                <li className="checked">Product strategy</li>
                <li className="checked">UX Design consultancy</li>
                <li className="checked">QA & iteration</li>
                <li className="checked twolines">Cross-cultural skills (I speak spanish, english and french)</li>
                <li className="checked">Full Service Delivery</li>
                <li className="checked twolines">Design complexity management and facilitation</li>

                
                </ul>
            </div>
            <div className="small-11 medium-2 large-1 columns padding5_top">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-code" width="52" height="52" viewBox="0 0 24 24" stroke-width="0.5" stroke="#faad2a" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z"/>
  <polyline points="7 8 3 12 7 16" />
  <polyline points="17 8 21 12 17 16" />
  <line x1="14" y1="4" x2="10" y2="20" />
</svg>
            </div>
            <div className="small-11 medium-9 large-5 columns padding5_top">
                <h4>Implementation</h4>
                <div className="skills_underline_orange"></div>
                <ul className="no_bullet">
                <li className="checked">Scope, timeline and budget responsibility</li>
                <li className="checked">Process definition</li>
                <li className="checked">Design system for various UI platforms</li>
                <li className="checked">Streamlined design handoff to dev</li>
                <li className="checked twolines">Support to front integration (React, Angular, RoR)</li>
                <li className="checked">Components Library creation</li>
                <li className="checked">Design validation (Quant/Qual)</li>
                <li className="checked">GIT</li>
                <li className="checked">Visual design & illustration</li>
                
                </ul>
            </div>
            <div className="small-11 medium-11 columns padding10_top"> 
                <h2 className="">Currently learning...</h2>
                <div className="skills_underline_orange"></div> 
                <div className="show-for-medium medium-1 columns padding5_bottom"></div>
                <div className="row align-left">
                    <div className="small-4 columns padding5_bottom">
                    <img className="icon-svg svgicon-framer" src={require('../images/svgicon-framer.svg')} alt="uxpages framerx"/>
                      FramerX
                    </div>
                    <div className="small-4 columns padding5_bottom">
                    <img className="icon-svg svgicon-storybook" src={require('../images/svgicon-storybook.svg')} alt="uxpages storybook"/>
                      Storybook
                    </div>
                    <div className="small-4 columns padding5_bottom ">
                    <img className="icon-svg svgicon-chef-hat" src={require('../images/svgicon-chef-hat.svg')} alt="uxpages thai cuisine"/>
                      Thai cuisine!
                    </div>
                </div>
        </div> 

        </div>
    </div>
</div>








<div className="row align-center padding5_top">
	<div className="small-11 medium-11 columns">
		<h2 id="side_project">Side projects</h2>
		<div className="skills_underline_orange"></div>
        <div className="row align-center padding5_top">
            <div className="small-11 medium-6 columns">
                <div className="alpe_rouge_container">
                    <div className="alpe_rouge_img">
                        <img src={require('../images/idee_alperouge.jpg')} alt="alpe rouge espra pages"/>
                    </div>
                    <div className="alpe_rouge_bg-text"></div>
                    <div className="alpe_rouge_text_h2">
                        {/* <h2>I also like to work with my hands.</h2> */}
                    </div>
                    <div className="alpe_rouge_text_descrip_container">
                        <div className="alpe_rouge_text_descrip_container_text">
                            <p>Alongside my design activities I like to paint and play music.</p>
                            <Link to="#" onclick="track('Click-see-alperouge','Click-see-alperouge')">see the stuff I crafted (currently updating website...) <span className="target_blank"></span></Link>
                        </div>
                    </div>
                   

            </div>
        </div>
        <div className="small-11 medium-6 columns">
                <div className="alpe_rouge_container">
                <div className="alpe_rouge_img">
                        <img src={require('../images/biscayplain.jpg')} alt="biscayplain espra pages"/>
                    </div>
                    <div className="alpe_rouge_bg-text"></div>
                    <div className="alpe_rouge_text_h2">
                        {/* <h2>I also like to work with my hands.</h2> */}
                    </div>
                    <div className="alpe_rouge_text_descrip_container">
                        <div className="alpe_rouge_text_descrip_container_text">
                            <p>I publish a monthly newsletter for people interested in creativity.</p>
                            <Link to="https://biscaypla.in" onclick="track('Click-see-biscayplain','Click-see-biscayplain')">Subscribe here if you are not already a member!<span className="target_blank"></span></Link>
                        </div>
                    </div>
                    

            </div>
        </div>
    </div>
</div>
</div>




<div id="fourth" className="row align-center padding5_both">
	<div className="small-11 columns">
		<div className="row">
			<div className="small-11 medium-4 columns">
				<small>LATEST PUBLICATIONS</small>
				<h2>Journal</h2>
				<div className="skills_underline_orange"></div>
			</div>
			<div className="small-11 medium-8 columns">
				<div className="callout_publications">
					<small> 23/02/2020</small>
					<a href="http://convy.io/read/articles/good_emails" target="_blank" rel="noopener" onclick="track('Click-see-article-solitude','Click-see-article-solitude')"><h3>5 Tips To Make Emails That Convert<span className="target_blank"></span></h3></a>
					<p>Email design is hard. In this article we will review 5 rules that unsure email good conversion.</p>
				</div>
				<div className="callout_publications">
					<small> 03/01/2020</small>
					<a href="http://www.uxpages.com/blog/articles/the_five_paradoxes_of_creativity" target="_blank" rel="noopener" onclick="track('Click-see-article-five','Click-see-article-five')"><h3>The five paradoxes of creativity <span className="target_blank"></span></h3></a>
					<p>Understanding creativity means discerning the different paradoxes that compose it.</p>
				</div>
				<div className="callout_publications">
					<small> 23/12/2019</small>
					<a href="http://convy.io/read/articles/attractive_digital" target="_blank" rel="noopener" onclick="track('Click-see-article-five','Click-see-article-five')"><h3>5 Pro Tips To Make Your Product More Attractive<span className="target_blank"></span></h3></a>
					<p>Reaction to digital product appearances are fast, unconscious and will affect the way users engage with it. In this article we will share ways to ensure your product provides a great first impression.</p>
				</div>
				<div className="callout_publications">
					<small> 11/12/2019</small>
					<a href="http://www.uxpages.com/blog/articles/empathy_and_creativity" target="_blank" rel="noopener" onclick="track('Click-see-article-empathy','Click-see-article-empathy')"><h3>Empathy and creativity<span className="target_blank"></span></h3></a>
					<p>This phenomenon is the basis of human links and artistic communication.</p>
				</div>
			</div>
		</div>
	</div>
</div>











<Footer/>


</div>
</PageTransition>
) 

