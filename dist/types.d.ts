/**
 * Initial form state
 */
export type InitialState = {
    ok?: undefined;
    errors?: undefined;
};
/**
 * The result of an action performed
 */
export type ActionResult<T> = InitialState | ErrorResult | SuccessResult<T>;
/**
 * Successful result of an action performed. Forms can return arbitrary data under `data`
 */
export interface SuccessResult<T> {
    ok: true;
    data: T;
    errors: undefined;
}
/**
 * Error data returned from a failed action
 */
export interface ErrorData extends Record<string, string> {
    error: string;
}
/**
 * Error response
 */
export interface ErrorResult {
    ok: false;
    errors: ErrorData;
}
