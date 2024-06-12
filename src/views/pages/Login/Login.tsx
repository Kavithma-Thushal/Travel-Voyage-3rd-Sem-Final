import {Component} from "react";

export class Login extends Component {
    render() {
        return (
            <div className="flex h-screen items-center justify-center bg-gray-100">
                <div className="w-full max-w-sm p-8 space-y-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-3xl font-semibold text-center text-neonBlue">Sign In</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                className="w-full px-3 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                                type="email" placeholder="Enter Email"/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                className="w-full px-3 py-2 mt-1 text-sm border rounded"
                                type="password" placeholder="Enter Password"/>
                        </div>
                        <button type="submit"
                                className="w-full px-4 py-2 text-sm font-semibold bg-neonBlue rounded hover:text-white">
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}