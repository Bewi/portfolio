import React, { Component, createRef } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import Brick from '../brick/Brick';
import BrickBody from '../brick/BrickBody';
import BrickHeader from '../brick/BrickHeader';

const classes = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  placeholder: {
    minHeight: 100,
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
  },
})

class WrapperLight extends Component {
  constructor(props) {
    super(props);
    this.state = { discover: false };
    this.containerRef = createRef();
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { classes } = this.props;
    return (
      <section className={classes.container} ref={this.containerRef}>
        <div className={classes.placeholder}></div>
        <Brick discover={this.state.discover} theme="light">
          <BrickHeader theme={this.state.discover ? 'dark' : 'light'}>
            <Typography variant="h4" color="inherit">Super title</Typography>
          </BrickHeader>
          <BrickBody theme="light">
            <Typography variant="body1" color="inherit">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum leo sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse potenti. Cras suscipit ex nec pharetra cursus. Aenean venenatis ac eros sagittis semper. Nulla ante neque, molestie quis congue sed, tempor at ipsum. Curabitur malesuada semper dui, nec consectetur mauris vulputate id. Fusce lacus metus, aliquam vel mauris eget, euismod ullamcorper eros. Vestibulum scelerisque condimentum lobortis. Vivamus erat enim, luctus et gravida ut, feugiat ultrices justo.
              <br /><br />
              Quisque et est mollis, sagittis felis quis, vehicula ante. Aenean pulvinar justo ut ante malesuada aliquet at convallis massa. Duis euismod a nibh non dignissim. Duis elementum volutpat metus, ut lobortis tellus posuere eget. Cras pretium arcu ac urna pharetra, at dapibus est viverra. Nulla non libero eu lacus placerat porta. Pellentesque viverra ultricies turpis at suscipit. In non posuere neque, consequat accumsan erat. Phasellus sed convallis diam. Nunc faucibus tincidunt nisl, at hendrerit mi vulputate a. Ut velit dolor, pharetra a posuere quis, mollis condimentum neque. Morbi vel interdum justo. Phasellus in urna molestie nibh posuere imperdiet.
            </Typography>
          </BrickBody>
        </Brick>
      </section>
    )
  }

  handleScroll() {
    const shouldDisplay = window.pageYOffset > (this.containerRef.current.offsetTop - 64) || window.pageYOffset >= (document.body.offsetHeight - window.innerHeight - 1);
    if (shouldDisplay && !this.state.discover) {
      this.setState({ discover: true });
    } else if (!shouldDisplay && this.state.discover) {
      this.setState({ discover: false });
    }
  }
}

export default withStyles(classes)(WrapperLight);