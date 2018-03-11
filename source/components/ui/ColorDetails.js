import PropTypes from 'prop-types';
import Whoops404 from './Whoops404';

import { contrstYIQ } from '../../lib/color-helper';

import '../../style/color-details.css';

const ColorDetails = ({ className, title, color, history, location }) => {
    const contrst = contrstYIQ(color);

    return (
        (!color) ?
            <Whoops404 location={location} /> :
            <section
                className={(className) ? className + ' color-details' : 'color-details'}
                style={{ backgroundColor: color }}
                onClick={() => history.goBack()}>
                <h1 className={`color-details__title color-details__title--${contrst}`}>{title}</h1>
                <h2 className={`color-details__color-code  color-details__color-code--${contrst}`}>{color}</h2>
            </section>
    );
};

ColorDetails.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};

export default ColorDetails;