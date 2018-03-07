import { Component } from 'react';
import PropTypes from 'prop-types';

import '../../style/sort-menu.css';

const options = {
    date: "SORTED_BY_DATE",
    title: "SORTED_BY_TITLE",
    rating: "SORTED_BY_RATING",
}

const SortMenu = ({ sort = "SORTED_BY_DATE", onSelect = f => f }) =>
    <nav className="app__menu  sort-menu">
        <h2 className="sort-menu__title">Sort Colors</h2>
        {Object.keys(options).map((item, i) =>
            <a key={i}
                href="#"
                className={(sort === options[item]) ? 'sort-menu__item sort-menu__item--selected' : 'sort-menu__item'}
                onClick={e => {
                    e.preventDefault();
                    onSelect(item);
                }} title={options[item]}>{item}</a>
        )}
    </nav>

SortMenu.propTypes = {
    sort: PropTypes.string,
    onSelect: PropTypes.func
}

export default SortMenu
