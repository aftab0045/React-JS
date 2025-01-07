import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Dummy",
      location: "Default",
      userInfo: null, // Initialize userInfo as null
      avatar_url : "Dummy.photo",
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/aftab0045");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  render() {
    const { userInfo } = this.state;

    return (
      <div className="user-card">
        {userInfo ? ( // Check if userInfo is loaded
          <>
          <img src={userInfo.avatar_url}></img>
            <h1>Name: {userInfo.name}</h1>
            <h2>Location: {userInfo.location || "Not available"}</h2>
            <h2>Mob No.: +91 99999 22222</h2>
            <h2>Gmail: xyz@gmail.com</h2>
          </>
        ) : (
          <h1>Loading...</h1> // Show a loading state while data is being fetched
        )}
      </div>
    );
  }
}

export default UserClass;
