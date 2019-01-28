import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 4,
    minHeight: '100vh'
  }
});

class Main extends Component {
  render() {
    const { classes } = this.props;

    return (
      <main className={classes.content}>
        
      </main>
    );
  }
}

export default withStyles(styles)(Main);