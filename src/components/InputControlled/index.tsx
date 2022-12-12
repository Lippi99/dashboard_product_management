import { InputGroup } from "./style";
import { InputHTMLAttributes } from "react";
import { css } from "../../../stitches.config";

interface InputGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label?: string;
  errorMessage?: string;
  register: any;
}

export const InputControlled = ({
  id,
  label,
  errorMessage,
  register,
  ...rest
}: InputGroupProps) => {
  const input = css({
    variants: {
      variant: {
        fieldWithError: {
          width: "100%",
          height: "2.5rem",
          border: "1px solid $danger",
          borderRadius: "5px",
          outline: 0,
          textIndent: 20,
          marginTop: "8px",
          fontFamily: "$general",
        },
        fieldWithoutErrors: {
          width: "100%",
          height: "2.5rem",
          border: "none",
          borderRadius: "5px",
          outline: 0,
          textIndent: 20,
          marginTop: "8px",
          fontFamily: "$general",
        },
      },
    },
  });

  return (
    <InputGroup>
      <label htmlFor={id} className="label">
        {label}
      </label>
      <input
        id={id}
        className={
          errorMessage !== undefined
            ? input({ variant: "fieldWithError" })
            : input({ variant: "fieldWithoutErrors" })
        }
        {...register}
        {...rest}
      />
      <span className="error">{errorMessage}</span>
    </InputGroup>
  );
};
