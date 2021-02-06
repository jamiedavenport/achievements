import React from "react";

type Props = {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  min?: string;
  max?: string;
  error?: string;
};

const InputGroup = React.forwardRef<HTMLInputElement, Props>(
  ({ id, label, type, placeholder, min, max, error }, ref) => {
    return (
      <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <div className="mt-1">
          <input
            ref={ref}
            type={type ?? "text"}
            name={id}
            id={id}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder={placeholder}
            min={min}
            max={max}
          />
        </div>
        {error !== undefined ? (
          <p className="mt-2 text-sm text-red-600">{error}</p>
        ) : null}
      </div>
    );
  }
);

export default InputGroup;
