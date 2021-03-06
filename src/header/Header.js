import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const styles = {
  noShaddows: {
    boxShadow: 'none'
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  '@keyframes slideDownAndFade': {
    from: { opacity: 0, top: -10 },
    to: { opacity: 1, top: 0 }
  },
  item: {
    top: -10,
    opacity: 0
  },
  appear: {
    animationName: 'slideDownAndFade',
    animationDuration: '0.3s',
    animationTimingFunction: 'ease-out',
    animationIterationCount: 1,
    animationFillMode: 'forwards'
  },
  delay1: {
    animationDelay: '0.1s'
  },
  delay2: {
    animationDelay: '0.2s'
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

    const { classes } = this.props;
    return (
      <AppBar className={classes.noShaddows}>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classNames(classes.grow, classes.item, classes.appear)}>
            BeWi
          </Typography>
          <Typography variant="h6" color="inherit" className={classNames(classes.grow, classes.item, classes.appear)}>
            Web developper
            <i className="App-header--cursor">_</i>
          </Typography>
          <div>
            <Tooltip title="Github">
              <IconButton color="inherit" aria-label="Github" href="https://github.com/Bewi" target="_blank" className={classNames(classes.item, classes.appear)}>
                <FontAwesomeIcon icon={faGithubAlt} />
              </IconButton>
            </Tooltip>
            <Tooltip title="LinkedIn">
              <IconButton color="inherit" aria-label="LinkedIn" href="https://www.linkedin.com/in/benjamin-wilfart-a06bb943/" target="_blank" className={classNames(classes.item, classes.appear, classes.delay1)}>
                <FontAwesomeIcon icon={faLinkedin} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Email me">
              <IconButton color="inherit" href="mailto:benjamin.wilfart@gmail.com" className={classNames(classes.item, classes.appear, classes.delay2)}>
                <FontAwesomeIcon icon={faEnvelope} />
              </IconButton>
            </Tooltip>
          </div>
        </Toolbar>
      </AppBar>
    )
  }

  handleScroll() {
    const shouldDisplay = window.pageYOffset > window.innerHeight - 64;

    if (shouldDisplay && !this.state.display) {
      this.setState({ display: true });
    } else if (!shouldDisplay && this.state.display) {
      this.setState({ display: false });
    }
  }
}

export default withStyles(styles)(Header);