import React, {Component} from 'react'
import {Link} from 'gatsby'
import floppy from '../images/designnestio_small.png'
import ThemeContext from '../context/ThemeContext'

class Navigation extends Component {
  state = {
    scrolled: false
  }

  navOnScroll = () => {
    if (window.scrollY > 20) {
      this.setState({scrolled: true})
    } else {
      this.setState({scrolled: false})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.navOnScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.navOnScroll)
  }

  render() {
    const {scrolled} = this.state
    const {menuLinks} = this.props

    return (
      <ThemeContext.Consumer>
        {theme => (
          <nav className={scrolled
            ? 'nav scroll'
            : 'nav'}>
            <div className="nav-container">
              <div className="brand">
                <Link to="/">
                  <img src={floppy} className="favicon"/>{' '}
                  <span className="text">designnest.io</span>
                </Link>
              </div>
              <div className="links">
                {menuLinks.map(link => (
                  <Link key={link.name} to={link.link}>
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default Navigation
