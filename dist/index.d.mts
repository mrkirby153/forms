import React$1, { FormHTMLAttributes } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

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

type FormContext = {
    errors?: Record<string, string>;
};
declare const FormContext: React$1.Context<FormContext>;
/**
 * A hook to retrieve the error message for a form field from the FormContext.
 */
declare function useFormError(fieldName: string): string | undefined;

type CommonFormProps = {
    validationErrors?: ErrorData;
};
interface ChildlessFormProps extends Omit<FormHTMLAttributes<HTMLFormElement>, "children">, CommonFormProps {
    asChild?: false;
    children?: React.ReactNode | undefined;
}
interface ChildFormProps extends FormHTMLAttributes<HTMLFormElement>, CommonFormProps {
    asChild: true;
    children: React.ReactNode;
}
type FormProps = ChildlessFormProps | ChildFormProps;
declare function Form(props: FormProps): react_jsx_runtime.JSX.Element;

export { type ActionResult, type ErrorData, type ErrorResult, Form, FormContext, type InitialState, type SuccessResult, error, initialState, isError, isSuccess, ok, useFormError };
