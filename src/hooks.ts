import React from "react";

export type FormContext = {
  errors?: Record<string, string>;
};

export const FormContext = React.createContext<FormContext>({});

/**
 * A hook to retrieve the error message for a form field from the FormContext.
 */
export function useFormError(fieldName: string): string | undefined {
  const context = React.useContext(FormContext);
  if (!context) {
    throw new Error("useFormError must be used within a FormContext");
  }
  return context.errors?.[fieldName];
}
