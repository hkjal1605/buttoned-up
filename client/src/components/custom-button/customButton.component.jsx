import React from 'react';

import './customButton.styles.scss';

const CustomButton = ({ children, add, ...otherProps }) => (
    <button className={`${add ? 'add' : ''} custom-button`} {...otherProps}>
        <span className='text'>{children}</span>
    </button>
);

export default CustomButton; 