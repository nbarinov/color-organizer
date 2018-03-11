import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import StarRating from './StarRating';
import TimeAgo from './TimeAgo';

import '../../style/color.css';

class Color extends Component {
    render() {
        const { className, id, title, color, rating, timestamp, onRate, onRemove, history } = this.props;
        
        return (
            <section className={(className) ? className + ' color' : 'color'}>
                <header className="color__header">
                    <h1 ref="title" className="color__title" onClick={() => history.push(`/${id}`)}>{title}</h1>
                    <button className="color__remove" onClick={onRemove} title="remove color">x</button>
                </header>
                <div className="color__block" style={{ backgroundColor: color }} onClick={() => history.push(`/${id}`)}></div>
                <footer className="color__footer">
                    <StarRating className="color__rating" starsSelected={rating} onRate={onRate} />
                    <TimeAgo className="color__timeago" timestamp={timestamp} />
                </footer>
            </section>
        );
    }
}

Color.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    rating: PropTypes.number,
    onRemove: PropTypes.func,
    onRate: PropTypes.func,
};

Color.defaultProps = {
    rating: 0,
    onRate: f => f,
    onRemove: f => f,
};

export default withRouter(Color);