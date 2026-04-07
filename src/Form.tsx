import { Slot } from "@radix-ui/react-slot";
import { FormHTMLAttributes } from "react";
import { FormContext } from "./hooks";
import { ErrorData } from "./types";

type CommonFormProps = {
  validationErrors?: ErrorData;
};

interface ChildlessFormProps
  extends
    Omit<FormHTMLAttributes<HTMLFormElement>, "children">,
    CommonFormProps {
  asChild?: false;
  children?: React.ReactNode | undefined;
}

interface ChildFormProps
  extends FormHTMLAttributes<HTMLFormElement>, CommonFormProps {
  asChild: true;
  children: React.ReactNode;
}

export type FormProps = ChildlessFormProps | ChildFormProps;

function isChild(props: FormProps): props is ChildFormProps {
  return props.asChild === true;
}

export default function Form(props: FormProps) {
  const { asChild, validationErrors, ...rest } = props;
  const Component = isChild(props) ? Slot : "form";

  return (
    <FormContext value={{ errors: validationErrors }}>
      <Component {...rest} />
    </FormContext>
  );
}
