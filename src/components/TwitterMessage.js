import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      charsLeft : this.props.maxChars,
      tweet : ""
    };
  }

  handleChange(e){
      this.setState(
         {
          charsLeft : this.props.maxChars - e.target.value.length,
          tweet: e.target.value
        }
      )
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          onChange={ (event) => this.handleChange(event)} 
          type="text" 
          name="message" 
          id="message"
          value={this.state.tweet}
          />
        <p>Remaining chars: {this.state.charsLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
