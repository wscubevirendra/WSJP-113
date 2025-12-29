'use client'
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { useRouter } from 'next/navigation';

export default function UserFormUI() {
    const router = useRouter()
    const notify = (msg, flag) => toast(msg, { type: flag ? "sucess" : "error" });

    function submitHandler(event) {
        event.preventDefault();
        const payload = {
            name: event.target.name.value,
            email: event.target.email.value,
            age: event.target.age.value
        }
        axios.post("http://localhost:5000/student/create", payload).then(
            (response) => {
                if (response.data.flag == 1) {
                    notify(response.data.message, response.data.flag);
                    router.push("/")
                } else {
                    notify(response.data.message, response.data.flag)
                }
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }



    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <ToastContainer />
            <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6">
                    User Details
                </h2>

                {/* Name */}
                <form onSubmit={submitHandler} >
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">
                            Name
                        </label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Age */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-1">
                            Age
                        </label>
                        <input
                            type="number"
                            name="age"
                            placeholder="Enter your age"
                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Submit
                    </button>
                </form>

            </div>
        </div>
    );
}
