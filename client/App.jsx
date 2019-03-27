import React, { Component } from 'react';
import * as actions from "./actions/actions";
import { connect } from 'react-redux';

// import styles
import styles from './styles/main.scss';

// import main container
import MainContainer from './containers/MainContainer.jsx';

const mapStateToProps = (store) => ({
})

const mapDispatchToProps = dispatch => ({
})

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  render() {
    return (
      <div>
        <MainContainer />
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);