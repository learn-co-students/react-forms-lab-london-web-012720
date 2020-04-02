import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleSubmit(e){
    e.preventDefault();
    if (!this.state.username || !this.state.password) return;
    this.props.handleLogin(e,this.state);
  }

  handleChange(e){
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render() {
    return (
      <form 
      onSubmit={(event) => this.handleSubmit(event)}
      >
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={e => this.handleChange(e)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={e => this.handleChange(e)}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
