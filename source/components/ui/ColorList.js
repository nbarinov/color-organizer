import PropTypes from 'prop-types';

import Color from './Color';

import '../../style/color-list.css';

const ColorList = ({ className, colors = [], onRate = f => f, onRemove = f => f }) => (
    <div className={(className) ? className + ' color-list' : 'color-list'}>
        {colors.length === 0 ?
            <p className="color-list__p">No Colors Listed. (Add a Color)</p> :
            colors.map(color => (
                <Color
                    key={color.id}
                    {...color}
                    className="color-list__item"
                    onRate={(rating) => onRate(color.id, rating)}
                    onRemove={() => onRemove(color.id)}
                />
            ))
        }
    </div>
);

ColorList.propTypes = {
    className: PropTypes.string,
    color: PropTypes.array,
    onRate: PropTypes.func,
    onRemove: PropTypes.func,
};

export default ColorList;