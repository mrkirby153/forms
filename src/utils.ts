import {
  type ErrorData,
  type ErrorResult,
  type SuccessResult,
  type InitialState,
  ActionResult,
} from "./types";

/**
 * The initial state of a form
 */
export const initialState: InitialState = {};

/**
 * Represents a successful action result
 * @param data The data associated with the successful result
 * @returns A formatted success result object
 */
export function ok<T>(data: T): SuccessResult<T> {
  return {
    ok: true,
    data,
    errors: undefined,
  };
}

/**
 * Represents a failed action result
 * @param errors The data associated with the failed result
 * @returns A formatted failure result object
 */
export function error(errors: ErrorData | string): ErrorResult {
  const result = typeof errors === "string" ? { error: errors } : errors;
  return {
    ok: false,
    errors: result,
  };
}

/**
 * Narrows an ActionResult to an ErrorResult if the response is an error result
 * @param response The response
 * @returns True if the response is an error result, false otherwise
 */
export function isError<T>(response: ActionResult<T>): response is ErrorResult {
  return response.ok === false;
}

/**
 * Narrows an ActionResult to a SuccessResult if the response is a success result
 * @param response The response
 * @returns True if the response is a success result, false otherwise
 */
export function isSuccess<T>(
  response: ActionResult<T>,
): response is SuccessResult<T> {
  return response.ok === true;
}
