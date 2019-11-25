import React, { useState } from 'react';

import './form-input.scss'

const FormInput = props => {

    let [focusClass, setFocusClass] = useState();

    return (
        <div className='input-group'>
            <label className={ `${focusClass} form-label` } htmlFor={ props.id }>{ props.label }</label>
            <input className='form-input' onFocus={ () => setFocusClass('shrink') } ref={ props.reference } type={ props.type } id={ props.id } />
        </div>
    )
}

export default FormInput;