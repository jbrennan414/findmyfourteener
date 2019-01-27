import React, { Component } from 'react';
import './App.css';

// export class FourteenerCard extends Component {
export const FourteenerCard = ( props ) => (
      console.log('11111 props', props),
      <div className="fourteenerCard">
        <div className="mtnTitleBar">
          <h3>MT. EVANS</h3>
        </div>
          <img src="https://www.denverpost.com/wp-content/uploads/2016/04/20150901__p_27a2bcf7-fcff-43c3-82c0-6dd9c2e241a2lsoriginalph.jpg?w=480"></img>
          <p>This is where a we'll include some details about the mountain</p>
      </div>
)

export default FourteenerCard;
