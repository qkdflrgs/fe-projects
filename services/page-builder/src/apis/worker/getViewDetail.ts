import { ViewSchemaProps } from "@/src/utils/validation/schema/types";
import { WORKER_BASE_PATH, workerInstance } from ".";
import { ViewMetadata } from "./type";

type ViewDetailResponseData = {
  value: ViewSchemaProps;
  metadata: ViewMetadata;
};

const getViewDetailPath = (viewId: string) => `${WORKER_BASE_PATH}/${viewId}`;

type Params = {
  viewId: string;
};

export const getViewDetail = async ({ viewId }: Params) => {
  const response = await workerInstance.get(getViewDetailPath(viewId));

  const responseData = {
    value: JSON.parse(response.data.data.value),
    metadata: response.data.data.metadata,
  };

  return responseData as ViewDetailResponseData;
};
