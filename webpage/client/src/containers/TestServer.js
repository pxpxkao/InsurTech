import React, { Component } from "react";

class TestServer extends Component {
  state = {
    users: [],
    locations: [],
  };
  componentDidMount() {
    this.getUsers();
    console.log(this.state.users);
    this.getLoc();
  }
  getUsers = () => {
    fetch("/clients/新北市")
      .then((res) => res.json())
      .then((res) => this.setState({ users: res.data }))
      .catch((err) => console.error(err));
  };
  getLoc = () => {
    fetch("/locations/新北市")
      .then((res) => res.json())
      .then((res) => this.setState({ locations: res.data }))
      .catch((err) => console.error(err));
  };

  renderUser = (user) => (
    // <div key={user.id}>
    //   {user.first_name} {user.last_name}
    // </div>
    <div key={user.id}>
      {user.公司名稱} {user.區域} {user.核准設立日期.slice(0, 10)}
    </div>
  );

  renderLoc = (loc) => <div>{loc.區域}</div>;

  render() {
    const { users, locations } = this.state;
    return (
      <div>{locations.map(this.renderLoc)}</div>
      // <div>
      //   {users.length} {users.map(this.renderUser)}
      // </div>
    );
  }
}

export default TestServer;
