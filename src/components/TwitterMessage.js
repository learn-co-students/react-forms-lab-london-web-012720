import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "hi"
    };
  }

  handleChange = event => {
    if (event.target.value.length < this.props.maxChars) {
      this.setState({
        message: event.target.value
      });
    }
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          onChange={this.handleChange}
          type="text"
          name="message"
          id="message"
          value={this.state.message}
        />
        <div className="counter">
          {this.state.message.length}/{this.props.maxChars}
        </div>
      </div>
    );
  }
}

export default TwitterMessage;
