import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import {Modal} from '../../common';

const LoginForm = () => {
    const [login, setLogin] = useState(false);
    const [inputs, setInputs] = useState({
        username: '',
        password: '',
    });
    const [status, setStatus] = useState({
        type: '',
        message: '',
        error: '',
    });

    const [isOpen, setIsOpen] = useState(false);
    const [modal, setModal] = useState({
        title: '',
        content: '',
        buttons: ['Submit'],
    });

    const handleChange = (event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let api_base = process.env.REACT_APP_API_BASE;

        fetch(api_base + 'login', {
            method: 'post',
            body: JSON.stringify(inputs),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.status === 'success') {
                    localStorage.setItem('wallet_login', 'true');
                    localStorage.setItem('wallet_user', JSON.stringify(result.user));

                    setLogin(true);
                } else {
                    localStorage.setItem('wallet_login', 'false');
                    setLogin(false);
                    setStatus({
                        type: 'danger',
                        message: 'Something went wrong',
                        error: result.message,
                    });
                    openModal({
                        title:'Error',
                    })
                }
            })
            .catch((error) => {
                console.log(error);
                setStatus({
                    type: 'danger',
                    message: 'Something went wrong',
                    error: error,
                });
            });
        //event.preventDefault();
    };

    const openModal = (modal) => {
        setModal(modal);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return login ? (
        <Navigate to={'/'} />
    ) : (
        <>
            <Modal modal={modal} closeModal={closeModal} isOpen={isOpen}>
                <>
                    {status.error}
                    {/*<div className="mt-12 flex justify-end">
                        <button
                            type="button"
                            className="px-10 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ml-auto"
                            onClick={closeModal}
                        >
                            Okay
                        </button>
                    </div>*/}
                </>
            </Modal>
            <div className="wlogin-wrapper rounded-2xl px-8 md:px-16 pt-14 mt-6">
                <h1
                    className={
                        'font-thin text-3xl text-center mb-6 flex items-end justify-center items-center'
                    }>
                    <span className={'font-bold pr-2 mr-2 border-r border-gray-500 text-4xl'}>
                        login
                    </span>
                </h1>
                <p className={'text-center text-sm mb-8 text-gray-800'}>
                    Don't have an account?{' '}
                    <Link className={'font-bold hover:text-black'} to={'/register'}>
                        Register
                    </Link>
                </p>
                <form onSubmit={handleSubmit}>
                    <div className={'my-3'}>
                        <label className={'text-sm mb-1 inline-block'}>Username</label>
                        <input
                            type="text"
                            className={
                                'p-2 rounded-lg w-full border-2 focus:border-primary hover:border-gray-400 outline-none dark:bg-gray-700'
                            }
                            placeholder={'Username'}
                            name={'username'}
                            onChange={handleChange}
                            autoComplete={'off'}
                        />
                    </div>
                    <div className={'my-3'}>
                        <label className={'text-sm mb-1 inline-block'}>Password</label>
                        <input
                            type="password"
                            className={
                                'p-2 rounded-lg w-full border-2 focus:border-primary hover:border-gray-400 outline-none dark:bg-gray-700'
                            }
                            placeholder={'Password'}
                            name={'password'}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={'flex justify-end mt-6'}>
                        <button type={'submit'} className={'py-3 btn-primary'}>
                            Login
                        </button>
                    </div>
                </form>
            </div>
            <div
                className={
                    'login-wrapper text-white rounded-2xl px-8 py-6 mt-6 ' +
                    (status.type !== '' ? 'bg-' + status.type : '')
                }>
                {status.error}
            </div>
        </>
    );
};


export default LoginForm;