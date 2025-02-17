import React from 'react';

import './SimpleForm.scss';

interface IProps {
    value: string;
    placeholder: string
    onChange: (value: string) => void;
    onSentForm: () => void;
}

const SimpleForm: React.FunctionComponent<IProps> = (props: IProps) => {
    return (
        <div className='simpleForm'>
            <input
                value={props.value}
                placeholder={props.placeholder}
                onChange={
                    (event: React.ChangeEvent<HTMLInputElement>) => props.onChange(event.target.value)
                }
            />
            <button
                onClick={props.onSentForm}
            >
                Go!
            </button>
        </div>
    );
}

export default SimpleForm;
