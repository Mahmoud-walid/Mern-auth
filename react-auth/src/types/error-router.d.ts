export interface IErrorRouter {
    data: string;
    error: {
      message: string;
    };
    status: number;
    statusText: string;
  }