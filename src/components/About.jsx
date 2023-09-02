import User from "./User";
// import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about">
      <h1>This is About page</h1>
      <User
        name={"Lijin"}
        phone={1122334455}
        email={"lijin.email.com"}
        comptype={"Functional"}
      />
      {/* <UserClass
        name={"Lijin"}
        phone={1122334455}
        email={"lijin.email.com"}
        comptype={"classBased"}
      /> */}
    </div>
  );
};

export default About;
