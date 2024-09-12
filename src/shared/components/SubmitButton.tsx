import { FC } from 'react';
import { SubmitButtonProps } from '@core/types/auth';

const SubmitButton: FC<SubmitButtonProps> = ({ loading, label }) => (
    <button
        type="submit"
        disabled={loading}
        className={`w-full px-4 py-2 rounded-md shadow-sm text-white font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-500'
        }`}
    >
        {loading ? 'Loading...' : label}
    </button>
);

export default SubmitButton;
