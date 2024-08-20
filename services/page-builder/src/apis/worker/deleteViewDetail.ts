import { workerInstance } from ".";
import { getViewDetailPath } from "./getViewDetail";

type Params = {
  viewId: string;
};

export const deleteViewDetail = async ({ viewId }: Params) => {
  await workerInstance.delete(getViewDetailPath(viewId));
};
