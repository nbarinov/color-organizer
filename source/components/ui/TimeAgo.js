import PropTypes from 'prop-types';

import { ago } from '../../lib/time-helper';

import '../../style/time-ago.css';

const TimeAgo = ({ className, timestamp }) => (
    <div className={(className) ? className + ' time-ago' : 'time-ago'}>
        {ago(timestamp)}
    </div>
);

TimeAgo.propTypes = {
    className: PropTypes.string,
    timestamp: PropTypes.string.isRequired,
};

export default TimeAgo;