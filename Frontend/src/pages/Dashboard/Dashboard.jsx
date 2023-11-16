//React
import { useRef, useState } from "react";

import React from 'react';

//Lib imports
import { ArrowRightOnRectangleIcon, PlusIcon } from "@heroicons/react/24/solid"
import { fetcher } from "../../utils/fetcher";
import { DashboardStyled } from "./DashboardStyled.style";


// const [userLogged, setUserLogged] = useState(false);



const Dashboard = () => {

    const [render, setRender] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userLogged, setUserLogged] = useState(false);
    const formRef = useRef();

    //Handler para o envio de um novo lembrete
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            let user = await fetcher.getUser();
            console.log(user);
            if (user[0].email === email && user[0].password == password) {
                setUserLogged(true);
                setRender(true);
            }
            else {
                formRef.current.reset();
            }

        } catch (error) {
            console.error(error.message);
            return toast.error(`Failed to login. Username or password invalid`)

        }

    };
    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            setUserLogged(false);
            setRender(true);

        } catch (error) {
            console.error(error.message);
            return toast.error(`Failed to login. Username or password invalid`)

        }

    };

    return (

        <DashboardStyled>

            {
                userLogged ?

                    (

                        <div>
                            <button onClick={handleLogout}>logout</button>
                        </div>
                    )

                    :

                    (
                        <div className="loginContainer">
                            <h1>Malu Costa Nutricio</h1>
                            <form onSubmit={handleLogin} ref={formRef}>
                                <div>
                                    <label htmlFor="email">E-mail</label>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        required
                                        placeholder="Your e-mail"
                                        onChange={(e) => setEmail(e.target.value)}
                                        autoComplete="off"
                                        pattern='.*\S.*'></input>
                                </div>

                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        required
                                        placeholder=""
                                        onChange={(e) => setPassword(e.target.value)}
                                        autoComplete="off"
                                        pattern='.*\S.*'></input>
                                </div>
                                <button type='submit'>
                                    <ArrowRightOnRectangleIcon width={20} />
                                    <span>Login</span>
                                </button>
                            </form>

                        </div>


                    )
            }

        </DashboardStyled>

    )

}

export default Dashboard