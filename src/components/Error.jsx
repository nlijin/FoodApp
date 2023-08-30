import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="error-page">
      <h3>This is Error page</h3>

      <h3>{err.status}</h3>
      <h3>{err.statusText}</h3>
    </div>
  );
};

export default Error;
