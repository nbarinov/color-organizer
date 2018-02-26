import React from 'react';
import PropTypes from 'prop-types';

import Star from './Star';

import '../style/star-rating.css';

const StarRating = ({ className, starsSelected = 0, totalStars = 5, onRate = f => f }) => (
    <div className={(className) ? className + ' star-rating' : 'star-rating'}>
        <div className="star-rating__stars">
            {[...Array(totalStars)].map((n, i) =>
                <Star
                    key={i}
                    className="star-rating__star"
                    selected={i < starsSelected}
                    onClick={() => onRate(i + 1)} />
            )}
        </div>
        <p className="star-rating__total">{starsSelected} of {totalStars}</p>
    </div>
);

StarRating.propTypes = {
    className: PropTypes.string,
    starsSelected: PropTypes.number,
    totalStars: PropTypes.number,
    onRate: PropTypes.func,
}

export default StarRating