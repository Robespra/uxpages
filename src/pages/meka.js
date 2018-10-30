import React from 'react'
import Link from 'gatsby-link'
import Icon from '../components/icons'
let pathPrefix = `/`

const Meka = () => (
<div>
<div className="meka_bg">
    <div className="hero_project_title_block">
        <h1 className="project-title">mekacreative.io</h1>
        <div className="skills_underline_orange"></div>
        <h3 className="project-title">Using psychology, ai and conversational interface to help people being more creative</h3>
    </div>
    <div className="hero_project_img"><img src={require('../images/meka/intro_top_meka.jpg')} alt="convy case study hero image"/>
  </div>
</div>

<div className="section">
<div className="row align-center padding5_top">

    <div className="small-11 medium-9 columns padding5_top">

        <h3 className="project-title">Overview</h3>

        <h4 className="padding5_top">skills I grew in this project</h4>
                <div className="skills_underline_orange"></div>
        <div className="row align-left">
        <div className="small-11 medium-5 columns ">
                        <ul className="no_bullet padding10_bottom">
                        <li className="checked twolines">research</li>
                        <li className="checked twolines">synthesis and ideation</li>
                        <li className="checked twolines">prototyping & design</li>
                        <li className="checked twolines">storytelling</li>
                        <li className="checked twolines">product roadmap strategy</li>
                        <li className="checked twolines">retention/engagement metrics</li>

                        </ul>
        </div>  
        <div className="small-11 medium-5 columns ">
                            <ul className="no_bullet padding10_bottom">
                           <li className="checked twolines">AI / ML</li>     
                        <li className="checked twolines">emotional intelligence</li>
                        <li className="checked twolines">service design</li>
                        <li className="checked twolines">psychology / behavior design</li>
                        <li className="checked twolines">empathy for end-user</li>


                                </ul>
        </div> 
                      </div> 
</div> 
</div> 

<div className="row align-center padding5_top">
 <div className="small-11 medium-9 columns padding5_top">
 <h2 className="project-quote">"I want to assess and improve individual creativity"</h2>
 <p className="text-left content-project">Meka is a conversational bot oriented to creativity. 
 It has been designed to identify and train creative profiles. 
 I took part as a founder and UX Designer in this project alongside with one serial 
 entrepreneur and researcher in creativity and one full-stack developper. 
Creative industries face an information gap on skills : there is little evidence on the 
 skills required by creative talent. Based on our knowledge and the creative profiles 
 I prepared for various domains, I aim to help companies in hiring creative profiles. 
Creativity is about connecting dots. When designing meka we decided to connect psychology, 
 machine learning and conversational ui dots. This project is still on going and first 
 BETA version is to be released in 2018.</p>
         <img className="hero_project padding10_top" src={require('../images/meka/meka_about_graph.svg')} alt="meka project hero image"/>
    


         <div className="row align-center padding10_bottom" id="content">
<div className="small-4"><h5>Psychology</h5></div>
<div className="small-4 text_center"><h5>Conversational UI</h5></div>
<div className="small-4 text_right"><h5>Artificial Intelligence</h5></div>
</div>


<h2 className="project-title padding5_top">Framing / product validation</h2>
<p className="text-left content-project">
Framing the project with a couple of short sentences help to drive upcoming researches toward the correct direction. 

<strong>Our product is:</strong>
<strong>For</strong>  individuals and companies
<strong>Who</strong> want to assess and train creativity
<strong>The</strong> mēkā product is a AI driven chat bot
<strong>That</strong> makes assessment faster and more accurate 
<strong>Unlike</strong> most of the generic form products 

</p>


<h3 className="project-title padding5_top">Users and market research</h3>
 <img className="hero_project padding5_top" src={require('../images/meka/persona_meka2.svg')} alt="meka persona 2"/>
 <p className="caption padding5_bottom">persona</p>
<p className="text-left content-project">I then have been collecting information from similar products : scope, strategy, UX... I quickly realized that most of the products were just online forms or HR software oriented to talent management with no real in-depth creativity features. On top of that, all of them offer a generic approach to creativity and I were not able to find any domain-specific assessment. Our assumption is creativity must be assessed within a specific domain for the output to be valuable.
Two types of users will be using mēkā : people wanting to assess their creativity in specific domains with the free version and hiring managers using mēkā pro in order to take the best decision. Based on this, I created two types of persona. 
</p>
<img className="hero_project padding5_top" src={require('../images/meka/case_study_benchmark.jpg')} alt="meka case study benchmark"/>
 <p className="caption padding5_bottom">competitive landscape</p>
<h6 className="project-title">Deliverables / Methods</h6>
     proto-persona, competitive landscape, business canvas 
     <img className="hero_project padding5_top" src={require('../images/meka/persona_meka.svg')} alt="meka persona 1"/>
 <p className="caption padding5_bottom">persona</p>

<h3 className="project-title padding10_top">High level user journey</h3>
<p className="text-left content-project">I defined and documented what would be the typical user journey for an applicant and a HR manager. User journey is a 
game mechanic which aims at making the process of interaction with a product easier and more understandable. 
A user feels as a real player starting the personal journey of the product usage. Designers plan different 
stages which a player (user) will gradually go through. Let’s look at the common steps which 
a user journey includes.</p>
<h6 className="project-title">Deliverables / Methods</h6>
    User journey steps, wireframes.

<h3 className="project-title padding10_top">Features Matrix</h3>
<p className="text-left content-project">As an output from the previous phases I created a matrix including the 
user journey and the identified features for MVP. This helped us to make a first assumption on what should 
be the key features and the feasibility of the project. </p>

    <h6 className="project-title">Deliverables / Methods</h6>
    Identified product opportunities, Value Proposition, Description of the profitability model, metrics & growth perspectives (traffic), Benchmarking. Features Priorization (micro and macro). First technical effort estimation.

<img className="hero_project padding5_top" src={require('../images/meka/case_study_micro_features.jpg')} alt="meka case study benchmark"/>
<p className="caption">Micro feature priorization for MVP (user-focus). Alongside this document I also created a macro feature priorization for MVP (product vs competition)</p>


<h2 className="project-title padding10_top">Design process</h2>



<h3 className="project-title padding10_top">Design process for dashboard</h3>
<p className="text-left content-project">For the design of the dashboard we are following a classic design process. I first run a couple of meetings in order to collect the goals, user needs, constraints of the previously identified features. I then designed a couple of flowcharts. Designing flow chart helps everybody understand the processes and refine them if necessary without losing time with design. Once validated I kicked off the design process as described below :  </p>

<img className="hero_project padding5_top" src={require('../images/meka/process.svg')} alt="process svg"/>
<p className="caption">This is the process I am following in most of my projects. I like to get to code early as it facilitates prototyping and hand-off to developers.</p>

<img className="hero_project padding5_top" src={require('../images/meka/flowchart_meka.jpg')} alt="wireframes flowchart meka"/>
<p className="caption">Flowchart are the starting point of my design process. I validate them with business and start mocking up on this basis.</p>

<img className="hero_project padding5_top" src={require('../images/meka/wireframes_user flow.jpg')} alt="wireframes user flow meka"/>
<p className="caption">Once I finalize low-fi wireframes I merge them into the user flow and run another round of feedback. I usually use axure for the wireframes, then use them for user flows design in Overflow or Sketch.</p>

<img className="hero_project padding5_top" src={require('../images/meka/wireframes high-fi.jpg')} alt="wireframes high fi invision meka"/>
<p className="caption">Invision prototype I share for feedback includes elements of what will be the final visual design.</p>



<h3 className="project-title padding10_top">Design process for conversational UI</h3>

<h4 className="project-title padding10_top">Triggers for users</h4>
<p className="text-left content-project">At this point that I had a clear vision of what the approach to the product should be : educational. When focusing on educational products UX, I started to identify what kind of triggers would make the users willing to use meka : cool UI (likebility), powerful AI (authority) and gamification (engagement). Doing this in the early steps of the project will help to align the features to be developed with the product long-term view. It turned out that a conversational interface would be the best option for this product. I try not to think too much about any technical constraint at that point, we will discuss the feasibility later on... </p>

<h4 className="project-title padding10_top">UI Research : the benefits of conversational interface</h4>
<p className="text-left content-project">Most of the assessment test online are very looonnnng endless forms. 
In our case I needed at least 50 inputs in order to assess a profile. 
This would have meant that many users would have quickly drop the process... </p>

    <p className="text-left content-project">I needed to capture the information in a more engaging way.</p>

     <p className="text-left content-project">I therefore decided to go for the conversational approach. I first considered using a natural language chat approach, using and processing the text the user provides. It was not the right approach for two reasons : this is still a painful process for the user and the development cost for treating and process open inputs was too high. It was also error prone.  </p>


<h4 className="project-title padding5_top">Our hybrid approach : capturing relevant information in a playful way</h4>

    <video width="100%" height="auto" autoplay="autoplay" loop>
  <source src="images/prototype_smaller.mp4" type="video/mp4"/>
</video>


<p className="caption">prototype</p>


<p className="text-left content-project padding5_top">I decided to implement an hybrid approach allowing us to capture information by following a conversational path already defined combining chat, voice with UI elements. There are many benefits to this approach : information is provided progressively under user´s command, the process can be stopped and saved at any time. It also provides one clear call to action for each test provided by the system. </p>

<h4 className="project-title padding5_top">Getting better user engagement : mēkā, the face of a product</h4>

<p className="text-left content-project">
This hybrid conversation interface approach allowed us to be more creative for a better man-machine interactions. I created our friendly character, mēkā. mēkā will be the face of our product. I wanted it to be playful, funny and easy going in order to immediately grab users' attention and become memorable to them. To do so I looked for inspiration and wanted to create a Kawaii face style to connect with the user. I only took the charming and childlike parts from Kawaii as we also needed to provide authority to the character. On the technical side, we needed a character light and easy to animate so we used SVG. For the BETA version I kept the interaction pretty simples but I am working on more complex interactions as I am convinced that quality interactions with mēkā will lead to quality engagement.
</p>

<img className="hero_project padding5_top" src={require('../images/meka/meka_face.svg')} alt="meka case study face ui social cues"/>
<p className="caption ">mēkā, the mascot I designed for UI interactions and increase user engagement 
(did you notice the Bowie touch? ;-) Made in SVG vectors for better quality, performance and animations</p>
<h5 className="project-title padding5_top">Increasing engagement with social cues</h5>
<p className="text-left content-project">
With mēkā we are covering a wide range of social cues, helping our users to conect with the product : physical (eyes, face, movement), psychologocial (humor, personality, empathy...), social dynamics (cooperation, reciprocity) and social role (principle of authority by assuming the roles of teacher and guide in the process by reporting measurements and providing analysis). Social cues are suitable are appropriate and highly recommended for educational products. Creating mēkā helped us in our gamification strategy. 
</p>
<h5 className="project-title padding5_top">Gamification</h5>
<p className="text-left content-project">
Gamification is another trigger I wanted to use for mēkā. Our product is also an educational product, 
I aim to help people embracing the creative mindset. Turning learning into a fun game improves engagement 
and retention. </p>
<h6 className="project-title padding5_top"> I love to complete things</h6>
<p className="text-left content-project">
The user is guided through completing their assessment in the most efficient way possible and progression is shown by the percent of test completeness.  For the future realeases I plan to introduce a slight "challenge" approach in order to keep users motivated. 
</p>

<h6 className="project-title padding5_top">The right quantity of friction</h6>
<p className="text-left content-project">
I know that people learn much more from failure than from success. A balanced level of friction is inherent to educational product and can also lead to more engagement if related to a test and not the overall product !
</p>

<h6 className="project-title padding5_top">Customization</h6>
<p className="text-left content-project">
Users expect individuality. I also decided to allocate development time for customization of their profiles and their own man-machine interaction. This will help our users to engage more with mēkā. 
</p>



<h4 className="project-title padding5_top">Implementation costs</h4>

<p className="text-left content-project">
    Conversational Interface was also the cheapest option with regards of the team skillset. The front-end of the app is essentially designed in SVG. SVG is light and powerfull. I can therefore directly implement or test new ideas with less front-back interactions... Saving time and money with the app development allows us to invest more in AI training. I decided to follow the conversational interface option and started to work on the wireframes taking into account all the inputs provided in research phases (priorized features, art direction, triggers)
</p>

 <h6 className="project-title">Deliverables / Methods</h6>
    low/hi-fi wireframes, prototype

<h2 className="project-title padding10_top">Product strategy</h2>
<p className="text-left content-project">Afer having consolidated the information about our users, the market and the product it was time to discuss and plan what would be our strategy. Based on the inputs from the wireframes and drafts I created of the product I coded a prototype including what I identified as core features. I like to use code when deciding what will be the key features for a product. Seeing things in context is key. After a couple of iteration sessions with all the team I all meet in order to gather insights about the product goals. It helps prioritize features and define our key performance indicators (KPIs). KPIs help inform design decisions along the way and measure results of the UX efforts. 
</p>
<h3 className="project-title padding5_top">Test version VS Pro Version</h3>

<img className="hero_project padding5_top" src={require('../images/meka/meka_pro_sample.png')} alt="meka pro dashboard"/>
 <p className="caption">prototype</p>
<p className="text-left content-project padding5_top">mēkā will be free for users wanting to test and improve their creativity. In the meantime, the information provided by free users will train our AI. The pro version of mēkā (to be released later) will focus on company specific application process and professional dashboards for hiring manager. I will charge companies for using these features.</p>

<h6 className="project-title">Deliverables / Methods</h6>
Overall product strategy including long-term goals and KPI, Product roadmap including development effort

<h2 className="project-title padding10_top">Current status</h2>
<p className="text-left content-project">We are currently working on the development of the product. I decided to use the prototype I designed in the landing page and track every single interaction. meka will be domain specific (art/design, business, coding, music and ... yes, cooking!). I will be using a common template for all combined with one specific test for each domain. The development of the specific test for each domain is resource consuming so I decided to check which domain most users wanted to train.
</p>

<h6 className="project-title">Launch</h6>
     <p className="text-left content-project">Hopefully somewhere in 2018! Please visit mekacreative.io and spread the word!</p>










<div className=""></div>
<h4 className="padding5_top">skills I grew in this project</h4>
                <div className="skills_underline_orange"></div>
<div className="row align-left">
<div className="small-11 medium-5 columns ">
                <ul className="no_bullet padding10_bottom">
                <li className="checked twolines">research</li>
                <li className="checked twolines">synthesis and ideation</li>
                <li className="checked twolines">prototyping & design</li>
                <li className="checked twolines">storytelling</li>
                <li className="checked twolines">product roadmap strategy</li>
                <li className="checked twolines">retention/engagement metrics</li>
               
                </ul>
</div>  
                <div className="small-11 medium-5 columns ">
                    <ul className="no_bullet padding10_bottom">
                         <li className="checked twolines">AI / ML</li> 
                <li className="checked twolines">emotional intelligence</li>
                <li className="checked twolines">service design</li>
                <li className="checked twolines">psychology / behavior design</li>
                <li className="checked twolines">empathy for end-user</li>

                        </ul>
</div> 
              </div>

<div className="padding5_bottom"></div>
<h4 className="">tools I am using in this project</h4>
                <div className="skills_underline_orange"></div>
<div className="row align-left padding10_bottom">
<div className="small-11 medium-5 columns ">
                <ul className="no_bullet padding10_bottom">
                <li className="checked twolines">Axure</li>
                <li className="checked twolines">Sketch / Illustrator</li>
                <li className="checked twolines">Invision</li>
                <li className="checked twolines">Visual Studio Code</li>
                
               
                </ul>
</div>  
                <div className="small-11 medium-5 columns ">
                    <ul className="no_bullet padding10_bottom">
                    <li className="checked twolines">Git</li>
                <li className="checked twolines">HTML/CSS Javascript</li>
                         <li className="checked twolines">React (design integration)</li> 
                <li className="checked twolines">User brain (testing)</li>
            
                        </ul>
</div> 
              </div> 






</div> 








</div>


</div>





































    <video className="padding10_top" width="100%" height="auto" autoplay="autoplay" loop>
  <source src="images/prototype.mp4" type="video/mp4"/>
</video>




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




export default Meka