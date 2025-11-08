import type { FC, ChangeEvent, ReactNode } from 'react';

interface Props {
  name: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  children: ReactNode;
  error?: string;
}

const CheckboxField: FC<Props> = ({ name, checked, onChange, children, error }) => {
  return (
    <div>
      <label className="flex items-start">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          className="mt-1 mr-3 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <span className="text-sm text-gray-600">
          {children}
        </span>
      </label>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default CheckboxField;