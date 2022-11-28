import React from "react";

type Props = {
    disabled?: boolean;
    id?: string;
    className?: string;
    children?:     
    | JSX.Element
    | JSX.Element[]
    | string
    | string[];
};

export default function Button({children, disabled, id, className}: Props) {
  return (
    <button className={`${className} btn`} disabled={disabled} id={id}>
      {children}
    </button>
  );
}
