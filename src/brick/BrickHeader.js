import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

const classes = theme => ({
  header: {
    marginBottom: theme.spacing.unit * 3
  }
})

class BrickHeader extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.header}>
        {this.props.children}
      </div>
    )
  }
}

export default withStyles(classes)(BrickHeader);