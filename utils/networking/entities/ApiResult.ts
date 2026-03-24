export type IApiResult<T> =
  | {
      isError: true;
      msg: string;
    }
  | {
      isError: false;
      msg: string;
      data?: T;
    };
