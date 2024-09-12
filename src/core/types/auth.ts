export interface LoginFormProps {
    onSubmit: (username: string, password: string) => void;
    loading: boolean;
    error?: string | null;
}

export interface InputFieldProps {
    id: string;
    label: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SubmitButtonProps {
    loading: boolean;
    label: string;
}
