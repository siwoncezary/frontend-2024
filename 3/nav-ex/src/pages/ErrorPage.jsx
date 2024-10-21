import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <h1>Error</h1>
      <p>{error.message}</p>
      <p>{error.statusText}</p>
    </>
  );
}

export default ErrorPage;
