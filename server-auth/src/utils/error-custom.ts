import { CustomErrorType, ICustomError } from "../types/error-custom";

const customErrorHandler: CustomErrorType = (statusCode: number, message: string): ICustomError => {
  const error: ICustomError = new Error(message) as ICustomError;
  error.statusCode = statusCode;
  error.message = message;

  return error;
};

export default customErrorHandler;
