import { HttpError } from "./errors/errors";
import type { IApiResult } from "./entities/ApiResult";
class Fetcher {
  private resultLayer<T>(body: T, status: number): IApiResult<T> {
    let apiResult: IApiResult<T>;

    if (status > 299) {
      apiResult = { isError: true, msg: "failed to get the data" };
    } else {
      apiResult = {
        isError: false,
        msg: "fetched data successfully",
        data: body,
      };
    }

    return apiResult;
  }

  async get<T>(url: string, options: RequestInit = {}): Promise<IApiResult<T>> {
    options.method = "GET";
    // options.credentials ??= "include";

    try {
      const response = await fetch(url, options);
      const jsonData: T = (await response.json()) satisfies T;

      return this.resultLayer(jsonData, response.status);
    } catch (e: any) {
      if (e instanceof HttpError) throw e;

      throw new HttpError(
        `Request failed due to the network`,
        "Please check your network connection",
      );
    }
  }
}

export const FetchService = new Fetcher();
