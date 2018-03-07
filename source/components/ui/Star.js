import React from 'react';
import PropTypes from 'prop-types';

import '../../style/star.css';

const Star = ({ className, selected = false, onClick = f => f }) => (
    <div
        className={((className) ? className + ' star' : 'star') + ((selected) ? ' star--selected' : '')}
        onClick={onClick} />
);

Star.propTypes = {
    className: PropTypes.string,
    selected: PropTypes.bool,
    onClick: PropTypes.func,
};

export default Star