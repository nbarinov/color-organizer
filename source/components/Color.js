import React from 'react';
import PropTypes from 'prop-types';

import StarRating from './StarRating';

import '../style/color.css';

const Color = ({ className, title, color, rating = 0, onRemove = f => f, onRate = f => f }) => (
    <section className={(className) ? className + ' color' : 'color'}>
        <header className="color__header">
            <h1 className="color__title">{title}</h1>
            <button className="color__remove" onClick={onRemove} title="remove color">x</button>
        </header>
        <div className="color__block" style={{ backgroundColor: color }}></div>
        <footer className="color__footer">
            <StarRating starsSelected={rating} onRate={onRate} />
        </footer>
    </section>
);

Color.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    rating: PropTypes.number,
    onRemove: PropTypes.func,
    onRate: PropTypes.func,
};

export default Color