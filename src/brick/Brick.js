import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import classNames from 'classnames';

const classes = theme => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 5,
    marginRight: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    animation: 'slideDown',
    animationDuration: '0.3s',
    animationTimingFunction: 'ease-out',
    animationFillMode: 'forwards'
  },
  discover: {
    animation: 'slideUp',
    animationDuration: '0.3s',
    animationTimingFunction: 'ease-out',
    animationFillMode: 'forwards'
  },
  '@keyframes slideUp': {
    from: { top: 0, color: 'black' },
    to: { top: -100, color: 'white' }
  },
  '@keyframes slideDown': {
    from: { top: -100, color: 'white' },
    to: { top: 0, color: 'black' }
  },
})

class Brick extends Component {
  render() {
    const { classes, discover } = this.props;
    return (
      <div className={classNames(classes.content, discover ? classes.discover : null)}>
        {this.props.children}
      </div>
    )
  }
}

export default withStyles(classes)(Brick);