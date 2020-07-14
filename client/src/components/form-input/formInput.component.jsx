import React from 'react';

import './formInput.styles.scss';

const FormInput = ({ handleChange, label, imgUrl, ...otherProps }) => (
    <div className='input'>
        <img src={imgUrl} alt='icon' className='input__img'></img>
        <div className='input__content'>
            <input className='input__value' placeholder={label} onChange={handleChange} {...otherProps}></input>
            {label ? (
                <label className='input__label'>{label}</label>
            ) :null
            }
        </div>
        
    </div>
);

export default FormInput;