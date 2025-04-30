import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from './Provider/AuthContext';


const SingUp = () => {

    const { createUser, emailVerification} = use(AuthContext);
    
    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        
        console.log(name, email, password, confirmPassword);

        if (password.length < 8 && confirmPassword.length < 8) {
            alert('must be 8 characters')
            return;
        }
        if (!/(?=.*[a-z])/.test(password) && !/(?=.*[a-z])/.test(confirmPassword)) {
            alert('At least one lowercase letter');
            return;
        }
        if (!/(?=.*[A-Z])/.test(password) && !/(?=.*[A-Z])/.test(confirmPassword)) {
            alert('At least one uppercase letter');
            return;
        }
        if (!/(?=.*\d)/.test(password) && !/(?=.*\d)/.test(confirmPassword)) {
            alert('At least one digit');
            return;
        }
        createUser(email, password).then(result => {
            console.log(result.user);
           
            emailVerification().then(() => {
                alert('check inbox')
            })
        })
            .catch(error => {
            console.log(error);
        }) 
    }

    

    return (
        <div className="flex flex-col max-w-md mx-auto p-6 border rounded-md sm:p-6  ">
            <div className="mb-4 text-center">
                <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
                <p className="text-sm dark:text-gray-600">Sign up to access your account</p>
            </div>
            <form  onSubmit={handleSubmit} className="space-y-12">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm">name</label>
                        <input type="text" name="name" id="name" placeholder="Enter Your name" className="w-full px-3 py-2 border rounded-md  " />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md  " />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm">Password</label>
                        <input type="text" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md  " />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block mb-2 text-sm">Confirm Password</label>
                        <input type="text" name="confirmPassword" id="ConfirmPassword" placeholder="*****" className="w-full px-3 py-2 border rounded-md " />
                    </div>
                </div>
                <div className="space-y-1">
                    <div>
                        <button type="submit" className="cursor-pointer w-full px-8 py-3 font-semibold rounded-md">Sign in</button>
                    </div>
                    <p className="px-6 text-sm text-center ">Already have an account <Link to={'/singIn'} className='text-green-800 underline'>Sing In</Link>
                        
                    </p>
                </div>
            </form>
        </div>
    );
};

export default SingUp;