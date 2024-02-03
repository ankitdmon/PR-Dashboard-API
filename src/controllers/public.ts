import { Response, Request } from "express";
import { errorResponse, successResponse } from "../helpers/response";

export const test = (req: Request, res: Response) => {
  try {
    return successResponse(req, res, "Hello World!!");
  } catch (err) {
    return errorResponse(req, res, err as Error);
  }
};
