// "use client";

// import { useEffect, useState } from "react";
// import Modal_Form from "../form";

// export default function Page() {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [menuItems, setMenuItems] = useState([]);

//     const openModal = () => {
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//     };

//     useEffect(() => {
//         const fetchMenuItems = async () => {
//             try {
//                 const res = await fetch('http://localhost:3000/api/menu');
//                 if (!res.ok) throw new Error("Ошибка при получении данных");

//                 const response = await res.json();
//                 setMenuItems(response.data);
//             } catch (error) {
//                 console.error("Ошибка:", error);
//             }
//         };

//         fetchMenuItems();
//     }, []);

//     return (
//         <div className="conts">
//             <button className="dobavit" onClick={openModal}>Добавить в меню</button>
//             <div className="top-container">
//                 {menuItems.map((item) => (
//                     <Card2 key={item._id} item={item} />
//                 ))}
//             </div>
//             {isModalOpen && (
//                 <Modal_Form isOpen={isModalOpen} onClose={closeModal} />
//             )}
//         </div>
//     );
// }

// export const Card2 = ({ item }) => {
//     return (
//         <div className="card">
//         <div className="half"></div>
//         <div className="content">
//             <div className="im">
//                 <img src={item.image} alt={item.title} />
//             </div>
//             <div className="text">
//                 <h2>{item.title}</h2>

//             </div>
//             <div className="bts">
//                 <div className="buttons">
//                     <button className="blob-btn">
//                         Изменить
//                         <span className="blob-btn__inner">
//                             <span className="blob-btn__blobs">
//                                 <span className="blob-btn__blob"></span>
//                                 <span className="blob-btn__blob"></span>
//                                 <span className="blob-btn__blob"></span>
//                                 <span className="blob-btn__blob"></span>
//                             </span>
//                         </span>
//                     </button>
//                 </div>
//                 <div className="button-container">
//                     <button className="red-blob-btn">
//                         Удалить
//                         <span className="red-blob-btn__inner">
//                             <span className="red-blob-btn__blobs">
//                                 <span className="red-blob-btn__blob"></span>
//                                 <span className="red-blob-btn__blob"></span>
//                                 <span className="red-blob-btn__blob"></span>
//                                 <span className="red-blob-btn__blob"></span>
//                             </span>
//                         </span>

//                     </button>
//                 </div>
//             </div>
//         </div>
//     </div>
//     );
// };


"use client";

import { useEffect, useState } from "react";
import Modal_Form from "../form";

export default function Page() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [menuItems, setMenuItems] = useState([]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/menu');
                if (!res.ok) throw new Error("Ошибка при получении данных");

                const response = await res.json();
                setMenuItems(response.data);
            } catch (error) {
                console.error("Ошибка:", error);
            }
        };

        fetchMenuItems();
    }, []);

    const handleDelete = (id) => {
        setMenuItems((prevItems) => prevItems.filter((item) => item._id !== id));
    };

    return (
        <div className="conts">
            <button className="dobavit" onClick={openModal}>Добавить в меню</button>
            <div className="top-container">
                {menuItems.map((item) => (
                    <Card2 key={item._id} item={item} onDelete={handleDelete} />
                ))}
            </div>
            {isModalOpen && (
                <Modal_Form isOpen={isModalOpen} onClose={closeModal} />
            )}
        </div>
    );
}
export const Card2 = ({ item, onDelete }) => {
    const handleDelete = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/menu/${item._id}`, {
                method: 'DELETE',
            });
            const response = await res.json();

            if (response.success) {
                onDelete(item._id)
            } else {
                console.error("Failed to delete item:", response.message);
            }
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    return (
        <div className="card">
            <div className="half"></div>
            <div className="content">
                <div className="im">
                    <img src={item.image} alt={item.title} />
                </div>
                <div className="text">
                    <h2>{item.title}</h2>
                </div>
                <div className="bts">
                    <div className="buttons">
                        <button className="blob-btn">Изменить</button>
                    </div>
                    <div className="button-container">
                        <button className="red-blob-btn" onClick={handleDelete}>
                            Удалить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};