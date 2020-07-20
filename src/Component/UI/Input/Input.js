
import React from "react";
import styles from './Input.css';

const  input = (props) => {

    let inputElement = null;
    const inputClasses =  [styles.InputElement];

    if(props.invalid && props.shouldValidate && props.touched)
    {
        inputClasses.push(styles.Invalid)
    }

    switch ( props.elementType ) {

        case ( 'input' ):
            inputElement = <input
                className="InputElement"
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;

        case ( 'textarea' ):
            inputElement = <textarea
                className="InputElement"
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;

        case ( 'select' ):
            inputElement = (
                <select
                    className="InputElement"
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                className={inputClasses}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div className="Input">
            <label className="label">{props.label}</label>
            {inputElement}
        </div>
    );
};

export default input;