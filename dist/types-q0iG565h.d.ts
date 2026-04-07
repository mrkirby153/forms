/**
 * Initial form state
 */
type InitialState = {
    ok?: undefined;
    errors?: undefined;
};
/**
 * The result of an action performed
 */
type ActionResult<T> = InitialState | ErrorResult | SuccessResult<T>;
/**
 * Successful result of an action performed. Forms can return arbitrary data under `data`
 */
interface SuccessResult<T> {
    ok: true;
    data: T;
    errors: undefined;
}
/**
 * Error data returned from a failed action
 */
interface ErrorData extends Record<string, string> {
    error: string;
}
/**
 * Error response
 */
interface ErrorResult {
    ok: false;
    errors: ErrorData;
}

export type { ActionResult as A, ErrorData as E, InitialState as I, SuccessResult as S, ErrorResult as a };
