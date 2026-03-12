import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import axios from '../../common/AdminAxios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AdminAuthContext } from '../../context/AdminAuth';

const AdminLogin = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();
    const {login} = useContext(AdminAuthContext);

    const onSubmit = async (formData) => {
        try {
            const {message, success, data} = await axios.post("/admin/auth/login" , formData);
            if(success){
                const adminInfo={
                    token: data?.accessToken,
                }
                localStorage.setItem("adminInfo", JSON.stringify(adminInfo));
                login(adminInfo);
                navigate("/admin/dashboard");
            }
        } catch (error) {
            if(error.status === 400){
                toast.error(error?.response?.data?.message || "Invalid credentials");
            }else{
                console.error(error.message || "An error occurred during login");
            }
        }
    }

  return (
    <>
    <div className="bg-gray-200 min-h-screen lg:px-8 px-5 w-full flex justify-center items-center py-30">
      {/* login form */}
      <div className="max-w-md w-full rounded-md px-8 py-7 shadow-md bg-white">
        <h2 className="text-2xl text-gray-800 font-bold text-left">
          Admin Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-gray-700 font-medium mb-2">
              Email
            </label>
            <input 
                {...register("email", {
                    required: "Email is required",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                    }
                })}
                type="email" id="email" className="border border-gray-200 rounded-md shadow px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="Enter your email"
            />
            {errors?.email && <p className="text-red-500 text-sm mt-1">{errors?.email?.message}</p>}
          </div>


          <div className="flex flex-col space-y-2">
                <label htmlFor="password" className="text-gray-700 font-medium mb-2">
                    Password
                </label>
                <input 
                    {...register("password", {required: "Password is required"})}
                    type="password" id="password" className="border border-gray-200 rounded-md shadow px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="Enter your password"
                />
                {errors?.password && <p className="text-red-500 text-sm mt-1">{errors?.password?.message}</p>}
          </div>

          <div className="flex flex-col space-y-2 pt-3">
            <button className="bg-gray-900 hover:bg-gray-700 hover:text-white px-5 text-center py-2 w-full text-md rounded-md text-white">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default AdminLogin
