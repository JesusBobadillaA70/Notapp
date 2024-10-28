import React, { useState } from 'react';

function Form(props) {
    const { onSubmit } = props;

    const [formData, setFormData] = useState(
        {
            Note: ''
        }
    );

    const onChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(formData);
        setFormData({ Note: '' });
    }

    return (
        <form onSubmit={handleSubmit} >
            <div className="mb-3">
                <label htmlFor="exampleInput" className="form-label">Ingresa una nota.</label>
                <input
                    type="text"
                    name='Note'
                    className="form-control"
                    id="exampleInput"
                    onChange={onChange}
                    value={formData.Note}
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Form;
