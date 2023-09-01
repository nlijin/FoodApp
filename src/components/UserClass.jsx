import React from "react";
import UserChild from "./UserChild";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
    };

    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent ComponentDidMount");
  }

  render() {
    console.log("parent render");
    return (
      <div className="user-card">
        <p>Component: {this.props.comptype}</p>
        <p>Name: {this.props.name}</p>
        <p>Phone: {this.props.phone}</p>
        <p>email: {this.props.email}</p>
        <p>
          Count 1: {this.state.count}
          <button
            onClick={() => {
              this.setState({ count: this.state.count + 1 });
            }}
          >
            increase
          </button>
        </p>

        <UserChild />
      </div>
    );
  }
}

export default UserClass;
