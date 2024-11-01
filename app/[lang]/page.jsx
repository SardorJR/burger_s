"use client";
import Image from "next/image";
import Modal_Dost from "../../components/modal-dostavka";
import Card from "../../components/card";
import Food_selections from "../../components/Food_selection";
import { useEffect, useState } from "react";

export default function Home({ params: { lang } }) {
  console.log(lang);

  const [menuItems, setMenuItems] = useState([]);
  const [Category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null)
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/menu');
        if (!res.ok) throw new Error("Ошибка при получении данных")

        const response = await res.json();
        console.log("Response from API:", response);
        setMenuItems(response.data);
      } catch (error) {
        console.error("Ошибка:", error);
      }
    };

    fetchMenuItems();

  }, []);
  useEffect(() => {
    const fetchCategoryItems = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/category');
        if (!res.ok) throw new Error("Ошибка при получении данных")

        const response = await res.json();
        console.log("Response from API:", response);
        setCategory(response.data);
      } catch (error) {
        console.error("Ошибка:", error);
      }
    };

    fetchCategoryItems();

  }, []);
  const filteredMenuItems = selectedCategory
    ? menuItems.filter((item) => item.category_id === selectedCategory)
    : [];

  return (
    <>
      <div className="container">
        <div className="box-vibor-blud">

          {Category.map((category, index) => (
            <Food_selections
              key={category._id}
              selctions={category}
              setSelectedCategory={setSelectedCategory} 
              isActive={selectedCategory === category._id}
            />
          ))}
        </div>
      <div className="flex">
        <div className="sticky">
          <div className="left-flex">
            <div className="counts-box">
              <span>Корзина</span>
              <button>4</button>
            </div>
            <div className="elements">
              <div className="element">
                <div className="l">
                  <div className="left">
                    <img src="/images/Rectangle 2.png" alt="" />
                  </div>
                  <div className="center">
                    <span>Супер сырный</span>
                    <p>512г</p>
                    <h4>550₽</h4  >
                  </div>
                </div>
                <div className="right">
                  <span>-</span>
                  <span>0</span>
                  <span>+</span>
                </div>
              </div>
              <div className="element">
                <div className="l">
                  <div className="left">
                    <img src="/images/Rectangle 2.png" alt="" />
                  </div>
                  <div className="center">
                    <span>Супер сырный</span>
                    <p>512г</p>
                    <h4>550₽</h4  >
                  </div>
                </div>
                <div className="right">
                  <span>-</span>
                  <span>0</span>
                  <span>+</span>
                </div>
              </div>
              <div className="element" >
                <div className="l">
                  <div className="left">
                    <img src="/images/Rectangle 2.png" alt="" />
                  </div>
                  <div className="center">
                    <span>Супер сырный</span>
                    <p>512г</p>
                    <h4>550₽</h4  >
                  </div>
                </div>
                <div className="right">
                  <span>-</span>
                  <span>0</span>
                  <span>+</span>
                </div>
              </div>

            </div>
            <div className="counts-box2">
              <h4>Итого</h4>
              <h4>1279₽</h4>
            </div>
            <center>
              <Modal_Dost Button={<button>Оформить заказ</button>}>
                <div className="modal">
                  <div className="left-mod">
                    <div className="image-ponchik">
                      <img src="/images/pic.png" alt="" />
                    </div>
                  </div>
                  <div className="right-mod">
                    <form>
                      <h2>Доставка</h2>
                      <div className="inps">
                        <input type="text" placeholder="Ваше имя" />
                        <input type="text" placeholder="Телефон" />
                      </div>
                      <div className="flex-checkbox">
                        <div className="check">
                          <input type="checkbox" />
                          <p>Самовызов</p>
                        </div>
                        <div className="check">
                          <input type="checkbox" />
                          <p>Доставка</p>
                        </div>
                      </div>
                      <div className="one-inp">
                        <input type="text" placeholder="Улица, дом, квартира" />
                      </div>
                      <div className="flex-inp">
                        <input type="text" placeholder="Этаж" />
                        <input type="text" placeholder="Домофон" />
                      </div>
                      <button>Оформить</button>
                    </form>
                  </div>
                </div>
              </Modal_Dost>
            </center>
            <div className="zakas">
              <img src="/images/free-icon-delivery-2362252.png" alt="" />
              <span>Бесплатная доставка</span>
            </div>
          </div>
        </div>
        <div className="right-flex">
        <h2>{selectedCategory ? Category.find(cat => cat._id === selectedCategory)?.name : 'Выберите категорию'}</h2>
          <div className="box-elem">
            {filteredMenuItems.map((item) => (
              <Card elem={item} key={item._id} />
            ))}
          </div>
        </div>
      </div>
    </div >
    </>
  );
}