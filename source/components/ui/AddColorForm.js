import { Component } from 'react';
import PropTypes from 'prop-types';

import '../../style/add-color-form.css';

const AddColorForm = ({ onNewColor = f => f }) => {
    let _title, _color;

    const submit = e => {
        e.preventDefault();

        onNewColor(_title.value, _color.value);

        _title.value = '';
        _color.value = '#000000';
        _title.focus();
    };

    return (
        <form onSubmit={submit} className='app__add-color-form add-color-form'>
            <input type="text" className="add-color-form__input" ref={input => _title = input} placeholder="Color title..." required />
            <input type="color" className="add-color-form__color" ref={input => _color = input} required />
            <button className="add-color-form__button">Add new color</button>
        </form>
    );
};

AddColorForm.propTypes = {
    onNewColor: PropTypes.func,
};

export default AddColorForm