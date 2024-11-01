import Modal_Dost from "./modal-dostavka";

const Card = ({ elem }) => {

console.log(elem);
    return (
        <div className="elem">
            <div className="img">
                <img src={elem.image} alt={elem.title} />
            </div>
            <div className="texts">
                <p>{elem.price}₽</p>
                <span>{elem.title}</span>
                <h3>{elem.weight}г</h3>
                <div className="center2">
                    <Modal_Dost Button={<button className="btn">
                        <span>Добавить</span>
                    </button>}>
                        <div className="modal-sostav">
                            <h2>Мясная бомба</h2>
                            <div className="flexes">
                                <div className="item-right">
                                    <img src="/images/photo (1).png" alt="" />
                                </div>
                                <div className="item-left">
                                    <h4>Супер мясное наслаждение! Большая рубленая котлета из свежего говяжего мяса покорит вас своей сочностью, а хрустящие листья салата добавят свежести.</h4>
                                    <div className="column">
                                        <span>Состав:</span>
                                        <p>Пшеничная булочка</p>
                                        <p>Котлета из говядины</p>
                                        <p>Красный лук</p>
                                        <p>Листья салата</p>
                                        <p>Соус горчичный</p>
                                        <h5>520г, ккал 430</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="fl">
                                <div className="left">
                                    <button>Добавить</button>
                                    <button className="count">
                                        <span>-</span>
                                        <span>0</span>
                                        <span>+</span>
                                    </button>
                                </div>
                                <div className="right">
                                    <span>689₽</span>
                                </div>
                            </div>
                        </div>
                    </Modal_Dost>
                </div>
            </div>
        </div>
    );
};

export default Card;
