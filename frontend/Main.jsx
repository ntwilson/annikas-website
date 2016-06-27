import * as React from 'react';
import Navigation from './Navigation';

export default React.createClass({
  render: function () {
    var divStyle = {
      background: 'url(images/20140509_190008987_iOS.jpg) no-repeat center center',
      minHeight: '100%',
      backgroundSize: 'cover'
    };
    return (
      <div style={divStyle}>
        <Navigation/>
      </div>
    );
  }
});
