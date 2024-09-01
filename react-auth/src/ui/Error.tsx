import { useRouteError } from 'react-router-dom';
import { IErrorRouter } from '../types/error-router';

const Error = () => {
  const routeError = useRouteError() as IErrorRouter;
  console.log(routeError);

  return (
    <div>
      <h1>Somthing is wrong 😥</h1>
      <h1>({routeError.status})</h1>
      <p>{routeError.error.message}</p>
    </div>
  );
};

export default Error;
