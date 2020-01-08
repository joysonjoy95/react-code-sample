import React from 'react';

const InputContainer = (props) => {
        return (
            <div className={props.className ? props.className : 'w-100'}>
                <p className="font-weight-bold">
                    {props.label} {props.required ? <span className="text-danger">*</span> : ''}
                </p>
                {props.children}
            </div>
        );
}

export default InputContainer;