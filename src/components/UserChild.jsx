import React from "react";

class UserChild extends React.Component {
  constructor() {
    super();
    console.log("child constructor");
  }

  componentDidMount() {
    console.log("child componentDidMount");
  }

  render() {
    console.log("child render");
    return (
      <div>
        <h2>Child component</h2>
      </div>
    );
  }
}

export default UserChild;
