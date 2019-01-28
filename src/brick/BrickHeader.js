import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const classes = theme => ({
  header: {
    marginBottom: theme.spacing.unit * 3,
    transition: 'color 0.3s',
  },
  light: {
    color: theme.palette.secondary.contrastText
  },
  dark: {
    color: theme.palette.primary.contrastText
  }
})

class BrickHeader extends Component {
  render() {
    const { classes, theme } = this.props;
    return (
      <div className={classNames(classes.header, classes[theme])}>
        {this.props.children}
      </div>
    )
  }
}

BrickHeader.propTypes = {
  theme: PropTypes.oneOf(['dark', 'light'])
}

export default withStyles(classes)(BrickHeader);