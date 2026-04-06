/**
 * The initial state of a form
 */
export const initialState = {};
/**
 * Represents a successful action result
 * @param data The data associated with the successful result
 * @returns A formatted success result object
 */
export function ok(data) {
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
export function error(errors) {
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
export function isError(response) {
    return response.ok === false;
}
/**
 * Narrows an ActionResult to a SuccessResult if the response is a success result
 * @param response The response
 * @returns True if the response is a success result, false otherwise
 */
export function isSuccess(response) {
    return response.ok === true;
}
