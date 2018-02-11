import React, { Component } from 'react';
import Loadable from 'react-loadable'

const LoadableTest = Loadable({
  loader: () => import('./Test.js'),
  loading() {
    return <div>loading</div>
  }
})
const OtherLoadable = Loadable({
  loader: () => import('./Test.js'),
  loading() {
    return <div>also loading</div>
  }
})
class Home extends Component {

  render() {
    return (
      <div>
        szevasz
        <LoadableTest />
        <OtherLoadable />
      </div>
    );
  }
}

export default Home;