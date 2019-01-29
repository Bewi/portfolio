import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const classes = theme => ({
  body: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  dark: {
    color: theme.palette.primary.contrastText
  },
  light: {
    color: theme.palette.secondary.contrastText
  }
})

class BrickBody extends Component {
  render() {
    const { classes, theme } = this.props;
    return (
      <div className={classNames(classes.body, classes[theme])}>
        {this.props.children}
      </div>
    )
  }
}

BrickBody.propTypes = {
  theme: PropTypes.oneOf(['dark', 'light'])
}

export default withStyles(classes)(BrickBody);