import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // добавлен импорт Link из react-router-dom
import Heading from '../../common/Heading'; // исправлен путь к Heading
import './Modal.css'; // исправлен импорт стилей для модального окна

function Navbar(props) {
    const [modalOpen, setModalOpen] = useState(false);

    // Функция для открытия модального окна
    const openModal = () => {
        setModalOpen(true);
    };

    // Функция для закрытия модального окна
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <nav className="navbar-wrapper">
            <Link to="/">
                <Heading size={1.5} title="Fonte" />
            </Link>

            <div className="links">
                <Link to="/about">О нас</Link>
                <a href="#">Команда</a>
                <a href="#">Блог</a>
                <a href="#">Продукты</a>
                <Link to="/contacts">Контакты</Link>
            </div>

            <div className="auth-section">
                <button className='btn btn-warning' onClick={openModal}>
                    Войти
                </button>
                <a href="#">
                    <ins>Рус</ins>
                </a>
            </div>

            {/* Модальное окно */}
            {modalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="modal-close" onClick={closeModal}>Закрыть</span>
                        <h2>Авторизация или Регистрация</h2>
                        {/* Здесь может быть форма для авторизации или регистрации */}
                        <form>
                            <label htmlFor="username">Имя пользователя:</label>
                            <input type="text" id="username" name="username" />

                            <label htmlFor="password">Пароль:</label>
                            <input type="password" id="password" name="password" />

                            <button type="submit">Войти</button>
                        </form>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
