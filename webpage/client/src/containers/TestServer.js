import React, { Component } from "react";

class TestServer extends Component {
  state = {
    users: [],
  };
  componentDidMount() {
    this.getUsers();
    console.log(this.state.users);
  }
  getUsers = () => {
    fetch("http://localhost:4000/users")
      .then((res) => res.json())
      .then((res) => this.setState({ users: res.data }))
      .catch((err) => console.error(err));
  };

  renderUser = (user) => (
    <div key={user.id}>
      {user.first_name} {user.last_name}
    </div>
  );

  render() {
    const { users } = this.state;
    return <div>{users.map(this.renderUser)}</div>;
  }
}

export default TestServer;
