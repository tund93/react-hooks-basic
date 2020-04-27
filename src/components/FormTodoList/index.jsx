import React, { useState } from 'react'
import PropTypes from 'prop-types'

function FormTodoList(props) {
    const { onSubmit } = props;
    const [value, setValue] = useState('');
    const handleOnchange = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (!onSubmit) return;

        const formValues = {
            title: value
        }
        onSubmit(formValues)
        setValue('')
    }
    return (
        <form onSubmit={handleOnSubmit}>
            <input type="text" value={value} onChange={handleOnchange} />
        </form>
    )
}

FormTodoList.propTypes = {
    onSubmit: PropTypes.func,
}
FormTodoList.defaultProps = {
    onSubmit: null,
}

export default FormTodoList

