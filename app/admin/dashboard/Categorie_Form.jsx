import React from 'react';
import { useForm } from 'react-hook-form';

const Categorie_Form = ({ onClose }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const res = await fetch('http://localhost:3000/api/category', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                throw new Error('Ошибка при отправке данных');
            }

            const result = await res.json();
            console.log('Данные отправлены:', result);
            onClose();
        } catch (error) {
            console.error('Ошибка при отправке данных:', error);
        }
    };

    return (
        <div className="modal2">
            <div className="modal-content2">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Add Category</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        placeholder="Name"
                        {...register('name', { required: true })}
                    />
                    {errors.name && <span className="error">This field is required</span>}
                    
                    <input
                        type="text"
                        placeholder="Image"
                        {...register('image', { required: true })}
                    />
                    {errors.image && <span className="error">This field is required</span>}

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Categorie_Form;
