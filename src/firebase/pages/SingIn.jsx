import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from './Provider/AuthContext';


const SingIn = () => {

    const { logIn, googleProvider } = use(AuthContext);
    

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        logIn(email, password).then(result => {
            console.log(result.user);
        })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGoogle = () => {
        googleProvider().then(result => {
            console.log(result.user);
        })
    }

    return (
        <div className="flex flex-col max-w-md mx-auto p-6 border rounded-md sm:p-6  ">
            <div className="mb-4 text-center">
                <h1 className="my-3 text-4xl font-bold">Sign In</h1>
                <p className="text-sm dark:text-gray-600">Sign in to access your account</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-12">
                <div className="space-y-4">
                    <button onClick={handleGoogle} aria-label="Login with Google" type="button" className="flex items-center justify-center cursor-pointer w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p>Login with Google</p>
                    </button>
                    <h2 className='text-2xl font-bold text-center'>or</h2>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md  " />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm">Password</label>
                        <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md  " />
                    </div>

                </div>
                <div className="space-y-1">
                    <div>
                        <button type="submit" className="cursor-pointer w-full px-8 py-3 font-semibold rounded-md">Sign in</button>
                    </div>
                    <p className="px-6 text-sm text-center ">New hear  <Link to={'/singUp'} className='text-green-800 underline'>Sing Up</Link>

                    </p>
                </div>
            </form>
        </div>
    );
};

export default SingIn;