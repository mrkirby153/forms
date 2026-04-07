import React$1, { FormHTMLAttributes } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { E as ErrorData } from './types-q0iG565h.mjs';

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

export { Form, FormContext, useFormError };
