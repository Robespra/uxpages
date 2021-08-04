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
            <h4>I have been designing <span className="skills_highlight">digital products </span>from discovery to delivery and <span className="skills_highlight">providing guidance to organizations</span> for more than <span className="skills_highlight">10 years.</span>
            </h4>



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
        <div className="skills_underline_orange"></div>
        <h4 className="">I can help you with <span className="skills_highlight">front integration</span>, design <span className="skills_highlight">prototypes</span>, improve your <span className="skills_highlight">conversion rates</span> or set up a cohesive<span className="skills_highlight"> design system</span>.
            </h4>
        </div>
        </div>
        <div className="row align-left padding5_top padding5_bottom">
            <div className="small-11 medium-11 columns">
                    <div className="wrapper">
                        {/* Accordion Heading One */}
                        <div className="parent-tab">
                        <input type="radio" name="tab" id="tab-1" />
                        <label htmlFor="tab-1">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon-area icon-tabler icon-tabler-notebook" width="52" height="52" viewBox="0 0 24 24" stroke-width="0.5" stroke="#faad2a" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                    <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
                                    <line x1="13" y1="8" x2="15" y2="8" />
                                    <line x1="13" y1="12" x2="15" y2="12" />
                                </svg>
                                Research
                            </span>

                            <div className="icon">
                                <span>Generative & evaluative</span>
                                <i/></div>
                        </label>
                        <div className="content">
                            <p>Generative research : Focus group/itw, Field study, Personas, User journey, Tasks flows, Competitive audit, Use cases, Value proposition, Moodboard,
                                Culture-based user interface design</p>
                            <p>Evaluative research : Usability studies, Heuristic review, Focus group/itw, Metrics analysis, Taxonomies, Quant/Qual UX research.</p>
                            <p>Tools : <span className="tool">Userzoom</span> <span className="tool">rweb</span> <span className="tool">Analytics</span> <span className="tool">Lookback</span> <span className="tool">Hotjar</span> <span className="tool">Prototypes</span> <span className="tool">Videos, pdf or spreadsheets for findings presentation</span></p>
                        </div>
                        </div>
                        {/* Accordion Heading Two */}
                        <div className="parent-tab">
                        <input type="radio" name="tab" id="tab-2" />
                        <label htmlFor="tab-2">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon-area icon-tabler icon-tabler-artboard" width="52" height="52" viewBox="0 0 24 24" stroke-width="0.5" stroke="#faad2a" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
                                Ideation
                            </span>
                            <div className="icon">
                                <span>Prototypes for validation</span>
                                <i/></div>
                        </label>
                        <div className="content">
                            <p>Information architecture, Personas, Empathy maps, Storytelling / user journey, Wireframes, Interactive prototyping, Art direction / branding, Holistic & multidisciplinary approach</p>
                            <p><span className="tool">Figma</span> <span className="tool">FramerX</span> <span className="tool">HTML, CSS & JS</span> <span className="tool">Proto Pie(IxD)</span></p>
                        </div>
                        </div>
                        {/* Accordion Heading Three */}
                        <div className="parent-tab tab-3">
                        <input type="radio" name="tab" id="tab-3" defaultChecked />
                        <label htmlFor="tab-3" className="tab-3">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon-area icon-tabler icon-tabler-target" width="52" height="52" viewBox="0 0 24 24" stroke-width="0.5" stroke="#faad2a" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                    <circle cx="12" cy="12" r="1" />
                                    <circle cx="12" cy="12" r="5" />
                                    <circle cx="12" cy="12" r="9" />
                            </svg>
                            Design for business
                        </span>
                        <div className="icon">
                            <span>"Bring the data !"</span>
                            <i/></div>
                        </label>
                        <div className="content">
                           <p>Conversion of kpis into design strategy, Growth Design, Metrics analysis, A/B Test, Conversion optimization design, Product strategy, Competitive audit, UX Design consultancy, QA & iteration.
                           </p>

                        </div>
                        </div>
                        {/* Accordion Heading Four */}
                        <div className="parent-tab">
                        <input type="radio" name="tab" id="tab-6" />
                        <label htmlFor="tab-6">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon-area icon-tabler icon-tabler-code" width="52" height="52" viewBox="0 0 24 24" stroke-width="0.5" stroke="#faad2a" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                    <polyline points="7 8 3 12 7 16" />
                                    <polyline points="17 8 21 12 17 16" />
                                    <line x1="14" y1="4" x2="10" y2="20" />
                                </svg>
                                Implementation
                            </span>
                            <div className="icon">
                                <span>Design as a tool for empowerement</span>
                                <i className="fas fa-plus" /></div>
                        </label>
                        <div className="content">
                            <p>Object Oriented UX, Streamlined design handoff to dev, Support to front integration, Components Library creation, GIT, Visual design & illustration.</p>
                            <p>Frameworks : <span className="tool">React</span> <span className="tool">React native</span> <span className="tool">Storybook</span> <span className="tool">Styled-component </span> <span className="tool">Angular </span> <span className="tool">Ruby on Rails </span> <span className="tool">Bulma </span> <span className="tool">Tailwind </span> <span className="tool">Saas</span></p>
                        </div>
                        </div>
                        <div className="parent-tab">
                        <input type="radio" name="tab" id="tab-7" />
                        <label htmlFor="tab-7">
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon-area icon-tabler icon-tabler-compass" width="52" height="52" viewBox="0 0 24 24" stroke-width="0.5" stroke="#faad2a" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <polyline points="8 16 10 10 16 8 14 14 8 16" />
                            <circle cx="12" cy="12" r="9" />
                            <line x1="12" y1="3" x2="12" y2="5" />
                            <line x1="12" y1="19" x2="12" y2="21" />
                            <line x1="3" y1="12" x2="5" y2="12" />
                            <line x1="19" y1="12" x2="21" y2="12" />
                            </svg>
                                Design governance
                            </span>
                            <div className="icon">
                                <span>Scaling design</span>
                                <i className="fas fa-plus" /></div>
                        </label>
                        <div className="content">
                            <p>Project management, Governance and process definition, Design system for various UI platforms, Components Library creation, Design validation (Quant/Qual), Product/Feature Roadmap, UX Design consultancy, QA & iteration, Languages (I speak Spanish, English and French), Full Service Delivery, Design complexity management and facilitation.

                            </p>
                        </div>
                        </div>
                    </div>
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
					<small> 23/02/2021</small>
					<a href="http://convy.io/read/articles/good_emails" target="_blank" rel="noopener" onclick="track('Click-see-article-solitude','Click-see-article-solitude')"><h3>5 Tips To Make Emails That Convert<span className="target_blank"></span></h3></a>
					<p>Email design is hard. In this article we will review 5 rules that unsure email good conversion.</p>
				</div>
				<div className="callout_publications">
					<small> 03/01/2021</small>
					<a href="http://www.uxpages.com/blog/articles/the_five_paradoxes_of_creativity" target="_blank" rel="noopener" onclick="track('Click-see-article-five','Click-see-article-five')"><h3>The five paradoxes of creativity <span className="target_blank"></span></h3></a>
					<p>Understanding creativity means discerning the different paradoxes that compose it.</p>
				</div>
				<div className="callout_publications">
					<small> 23/12/2020</small>
					<a href="http://convy.io/read/articles/attractive_digital" target="_blank" rel="noopener" onclick="track('Click-see-article-five','Click-see-article-five')"><h3>5 Pro Tips To Make Your Product More Attractive<span className="target_blank"></span></h3></a>
					<p>Reaction to digital product appearances are fast, unconscious and will affect the way users engage with it. In this article we will share ways to ensure your product provides a great first impression.</p>
				</div>
				<div className="callout_publications">
					<small> 11/12/2020</small>
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

