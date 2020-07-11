import React from 'react'
class Footer extends React.Component {
  render() {
    const year = new Date().getFullYear();
    return (
      <div id="footer" className="ng-scope">
        <div className="container">
          <div className="copy-text">All Rights - {year}.</div>
        </div>
      </div>
    )
  }
}
export default Footer