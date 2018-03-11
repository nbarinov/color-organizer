import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../../style/sort-menu.css';

const SortMenu = ({ className, match }) => (
    <nav className={(className) ? className + ' sort-menu' : 'sort-menu'}>
        <h2 className="sort-menu__title">Sort Colors</h2>
        <NavLink to="/" className="sort-menu__item" activeClassName={match.isExact ? 'sort-menu__item--selected' : ''}>date</NavLink>
        <NavLink to="/sort/title" className="sort-menu__item" activeClassName="sort-menu__item--selected">title</NavLink>
        <NavLink to="/sort/rating" className="sort-menu__item" activeClassName="sort-menu__item--selected">rating</NavLink>
    </nav>
);

SortMenu.propTypes = {
    className: PropTypes.string,
};

export default SortMenu;
