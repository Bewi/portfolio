import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

const classes = theme => ({
  body: {
    marginTop: theme.spacing.unit * 2,
    color: 'black'
  }
})

class BrickBody extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.body}>
        {this.props.children}
      </div>
    )
  }
}

export default withStyles(classes)(BrickBody);