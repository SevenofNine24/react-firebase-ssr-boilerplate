import React, { Component } from 'react';
import Loadable from 'react-loadable'

const LoadableTest = Loadable({
  loader: () => import('./Test.js'),
  loading() {
    return <div>loading</div>
  }
})

class Home extends Component {

  render() {
    return (
      <div>
        <LoadableTest />
      </div>
    );
  }
}

export default Home;