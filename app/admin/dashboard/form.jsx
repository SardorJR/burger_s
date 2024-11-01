"use client";
import { useState, useEffect } from 'react'; 
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation'; 
import React from 'react';

const Modal_Form = ({ isOpen, onClose }) => {
  const { register, handleSubmit, reset } = useForm();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/category');
        if (!res.ok) throw new Error("Ошибка при получении данных категорий");

        const response = await res.json();
        setCategories(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Ошибка при получении категорий:', error);
      }
    };

    fetchCategories();
  }, []);

  async function onSubmit(formData) {
    console.log(formData);
    reset();

    try {
      const res = await fetch('http://localhost:3000/api/menu', {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responseData = await res.json();
      console.log(responseData);
      onClose();
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
    }
  }

  if (!isOpen) return null;

  return (
    <div className="popup-backdrop">
      <div className="popup-box">
        <button className="popup-close-btn" onClick={onClose}>
          &times;
        </button>
        <h2 className="popup-header">Добавить в меню</h2>
        <div className="popup-body">
          <form className="popup-form" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              name="image"
              className="popup-field"
              placeholder="Изображение"
              {...register('image')}
            />
            <input
              type="text"
              name="titles"
              className="popup-field"
              placeholder="Название"
              {...register('title')}
            />
            <input
              type="number"
              name="weight"
              className="popup-field"
              placeholder="Вес"
              {...register('weight')}
            />
            <input
              type="text"
              name="price"
              className="popup-field"
              placeholder="Цена"
              {...register('price')}
            />
            <select
              name="category_id"
              className="popup-field"
              {...register('category_id')}
            >
              <option value="">Выберите категорию</option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
            <textarea
              name="composition"
              className="popup-textarea"
              placeholder="Состав"
              {...register('composition')}
            ></textarea>
            <textarea
              name="description"
              className="popup-textarea"
              placeholder="Описание"
              {...register('description')}
            ></textarea>
            <button type="submit" className="popup-submit-btn">
              Добавить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal_Form 