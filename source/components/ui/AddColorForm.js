import { Component } from 'react';
import PropTypes from 'prop-types';

import '../../style/add-color-form.css';

class AddColorForm extends Component {
    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);
    }

    submit(e) {
        const { _title, _color } = this.refs;
        const { onNewColor } = this.props;

        e.preventDefault();

        onNewColor(_title.value, _color.value);

        _title.value = '';
        _color.value = '#000000';
        _title.focus();
    }

    render() {
        const { className } = this.props;

        return (
            <form onSubmit={this.submit} className={(className) ? className + ' add-color-form' : 'add-color-form'}>
                <h2 className='add-color-form__title'>Add Color</h2>
                <div className="add-color-form__fields">
                    <input type="text" className="add-color-form__input" ref="_title" placeholder="Color title..." required />
                    <input type="color" className="add-color-form__color" ref="_color" required />
                    <button className="add-color-form__button">Add new color</button>
                </div>
            </form>
        );
    }
}

AddColorForm.propTypes = {
    onNewColor: PropTypes.func,
};

AddColorForm.defaultProps = {
    onNewColor: f => f,
};

export default AddColorForm;