import React, { Component } from 'react';
import Status from '@/routes/Status'

class NotFound extends Component {
  render() {
    return (
      <Status code={404}>
        <div>
          Not found
        </div>
      </Status>
    );
  }
}

export default NotFound;
