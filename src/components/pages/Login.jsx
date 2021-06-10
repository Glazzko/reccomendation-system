import React, { useState } from "react";
import Logo from "../core/Logo";
import * as userActions from "../../redux/actions/userActions";
import { connect } from "react-redux";

function Login({ userLogin, loggedUser, history }) {
    const [user, setUser] = useState({
        username: "rimasjuzeliunas",
        password: "Pride1995"
    });

    const handleChange = ({ target }) => {
        setUser({
            ...user,
            [target.name]: target.value
        });
    };

    function handleSubmit(event) {
        event.preventDefault();
        userLogin({ ...user }).then(data => {
            history.push("/");
        });
    }
    return (
        <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center text-indigo-500">
                    <Logo />
                </div>
                <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form onSubmit={handleSubmit} method="POST">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-5 text-gray-700"
                            >
                                Username
                            </label>
                            <div className="mt-1 rounded-md shadow-sm">
                                <input
                                    id="username"
                                    type="username"
                                    name="username"
                                    onChange={handleChange}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-5 text-gray-700"
                            >
                                Password
                            </label>
                            <div className="mt-1 rounded-md shadow-sm">
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                />
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember_me"
                                    type="checkbox"
                                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                />
                                <label
                                    htmlFor="remember_me"
                                    className="ml-2 block text-sm leading-5 text-gray-900"
                                >
                                    Remember me
                                </label>
                            </div>
                        </div>

                        <div className="mt-6">
                            <span className="block w-full rounded-md shadow-sm">
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                                >
                                    Sign in
                                </button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        loggedUser: state.user
    };
}
const mapDispatchToProps = {
    userLogin: userActions.login
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
