import { FetchService } from "../../../utils/networking/lib";
import type { IApiResult } from "../../../utils/networking/entities/ApiResult";
import type { IProduct } from "../entities/entities";

export async function getAllProducts(): Promise<IApiResult<Array<IProduct>>> {
  let result: IApiResult<Array<IProduct>>;

  try {
    result = await FetchService.get<Array<IProduct>>(
      "https://fakestoreapi.com/products",
      {
        cache: "force-cache",
      },
    );
  } catch (e: any) {
    // wenn hier ein fehler kommt, dann muss er serverseitig sein
    throw e;
  }

  return result;
}
