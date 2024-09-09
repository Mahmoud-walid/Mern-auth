interface ICustomError extends Error {
  statusCode: number;
  message: string;
  success?: boolean;
}

type CustomErrorType = (statusCode: number, message: string) => ICustomError;

export { ICustomError, CustomErrorType };
