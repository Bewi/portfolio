import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubAlt } from '@fortawesome/free-brands-svg-icons';

const styles = {
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  '@keyframes slideDown': {
    from: {opacity: 0, top: -10},
    to: {opacity: 1, top: 0}
  },
  item: {
    top: -10,
    opacity: 0
  },
  appear: {
    animationName: 'slideDown',
    animationDuration: '0.3s',
    animationTimingFunction: 'ease-out',
    animationIterationCount: 1,
    animationFillMode: 'forwards'
  },
  delay: {
    animationDelay: '0.1s'
  }
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { display: false };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    if (!this.state.display) {
      return null;
    }

    const {classes} = this.props;
    return (
      <AppBar>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classNames(classes.grow, classes.item, classes.appear)}>
            Benjamin Wilfart
          </Typography>
          <Typography variant="h6" color="inherit" className={classNames(classes.grow, classes.item, classes.appear)}>
            Web developper
            <i className="App-header--cursor">_</i>
          </Typography>
          <div>
            <IconButton color="inherit" className={classNames(classes.item, classes.appear)}>
              <FontAwesomeIcon icon={faGithubAlt} />
            </IconButton>
            <IconButton color="inherit" className={classNames(classes.item, classes.appear, classes.delay)}>
              <FontAwesomeIcon icon={faLinkedin} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    )
  }
  
  handleScroll() {
    const shouldDisplay = window.pageYOffset > window.innerHeight - 74;

    if (shouldDisplay && !this.state.display) {
      this.setState({ display: true });
    } else if (!shouldDisplay && this.state.display) {
      this.setState({ display: false });
    }
  }
}

export default withStyles(styles)(Header);