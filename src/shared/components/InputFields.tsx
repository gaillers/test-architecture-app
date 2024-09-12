import { FC } from 'react';
import * as Label from '@radix-ui/react-label';
import { InputFieldProps } from '@core/types/auth';

const InputField: FC<InputFieldProps> = ({ id, label, type = 'text', value, onChange }) => {
    return (
        <div className="flex flex-col space-y-1">
            <Label.Root htmlFor={id} className="text-sm font-medium text-gray-700">
                {label}
            </Label.Root>
            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
            />
        </div>
    );
};

export default InputField;
