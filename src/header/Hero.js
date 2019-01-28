import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames';

const styles = theme => ({
  wrapper: {
    minHeight: '100vh',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.text.primary,
    boxShadow: theme.shadows[4]
  },
  subTitle: {
    color: theme.palette.text.secondary
  },
  spacing: {
    marginTop: theme.spacing.unit * 4,
  },
  '@keyframes fade': {
    from: { opacity: 1.0 },
    '50%': { opacity: 0 },
    to: { opacity: 1.0 }
  },
  cursor: {
    animation: 'fade 1000ms infinite'
  }
});

class Hero extends Component {
  render() {
    var { classes } = this.props;
    return (
      <section className={classes.wrapper}>
        <Typography variant="h3" color="inherit">
          Benjamin Wilfart
        </Typography>
        <Typography variant="h4" color="inherit" className={classNames(classes.subTitle, classes.spacing)}>
          > Web developper <span className={classes.cursor}>_</span>
        </Typography>
        <div className={classes.spacing}>
          <IconButton color="inherit">
            <FontAwesomeIcon icon={faGithubAlt} />
          </IconButton>
          <IconButton color="inherit">
            <FontAwesomeIcon icon={faLinkedin} />
          </IconButton>
        </div>
      </section>
    );
  }
}

export default withStyles(styles)(Hero);