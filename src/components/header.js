import React from 'react'
import Link from 'gatsby-link'
let pathPrefix = `/`



class Header extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      hasScrolled: false
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
}
handleScroll = (event) => {
  const scrollTop = window.pageYOffset

  if (scrollTop > 50) {
    this.setState({ hasScrolled: true })
  } else {
    this.setState({ hasScrolled: false })
  }
}
  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
<div id="header-mobile">
<Link className="menu__item" to="/"><img src={require('../images/uxpages_logo.svg')} alt="test" /></Link>
           <Link className="menu__item" to="../#recent_work"><span className="menu__item-name">case studies</span></Link>
           <Link className="menu__item" to="../#skills"><span className="menu__item-name">capabilities</span></Link>
            <Link className="menu__item" to="../#side_project"><span className="menu__item-name">side project</span></Link>
    <Link className="menu__item" to="../#contact-form"><span className="menu__item-name">contact</span></Link>
        </div>


  <div className="availability">
    <h6>I am available for product design projects starting April 2019. Interested? 
    <Link className="fat_underline" to="../#contact-form" onClick="track('Click-contact-project-topbar-index','Click-contact-project-topbar-index')">  contact me</Link></h6>
  </div>
  <nav className="sidebar-nav">
    <Link className="menu__item" to="/"><img src={require('../images/uxpages_logo.svg')} alt="test" /></Link>
           <Link className="menu__item" to="../#recent_work"><span className="menu__item-name">case studies</span></Link>
           <Link className="menu__item" to="../#skills"><span className="menu__item-name">capabilities</span></Link>
            <Link className="menu__item" to="../#side_project"><span className="menu__item-name">side project</span></Link>
    <Link className="menu__item" to="../#contact-form"><span className="menu__item-name">contact</span></Link>
  </nav>
  
</div>
    )
  }
}




export default Header
