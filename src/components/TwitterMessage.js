import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = (e) =>{
    this.setState({
      message: e.target.value
    })
  }

  render() {

    let numberMax = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" onChange={this.handleChange} value={this.state.message} id="message" />
        {numberMax}
      </div>
    );
  }
}

export default TwitterMessage;
