import { E as ErrorData, a as ErrorResult, I as InitialState, A as ActionResult, S as SuccessResult } from './types-q0iG565h.js';

/**
 * The initial state of a form
 */
declare const initialState: InitialState;
/**
 * Represents a successful action result
 * @param data The data associated with the successful result
 * @returns A formatted success result object
 */
declare function ok<T>(data: T): SuccessResult<T>;
/**
 * Represents a failed action result
 * @param errors The data associated with the failed result
 * @returns A formatted failure result object
 */
declare function error(errors: ErrorData | string): ErrorResult;
/**
 * Narrows an ActionResult to an ErrorResult if the response is an error result
 * @param response The response
 * @returns True if the response is an error result, false otherwise
 */
declare function isError<T>(response: ActionResult<T>): response is ErrorResult;
/**
 * Narrows an ActionResult to a SuccessResult if the response is a success result
 * @param response The response
 * @returns True if the response is a success result, false otherwise
 */
declare function isSuccess<T>(response: ActionResult<T>): response is SuccessResult<T>;

export { ActionResult, ErrorData, ErrorResult, InitialState, SuccessResult, error, initialState, isError, isSuccess, ok };
