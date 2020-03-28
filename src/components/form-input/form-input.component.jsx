import React from 'react';



import './form-input.styles.scss';

const FormInput = function(props){
    return(
        <div className="group">
            <input 
                className="form-input" 
                type={props.type} 
                name={props.name} 
                onChange={props.handleChange}
                label={props.label}
                required={props.required}
             />
            {
                props.label ? 
                (<label className={`${props.value.length ? 'shrink' : ''} form-input-label`} >
                    {props.label}
                </label>)
                : null
            }
        </div>

    )

};

export default FormInput;