"use client";

import clsx from "clsx";
import { FieldValues, FieldErrors, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  errors,
  label,
  register,
  disabled,
  required,
  type,
  id,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          type={type}
          autoComplete={id}
          className={clsx(
            "form-input block w-full rounded-md border-0 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6",
            errors[id] && "focus:ring-red-500",
            disabled && "opacity-50"
          )}
          placeholder={label}
          {...register(id, { required })}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default Input;
