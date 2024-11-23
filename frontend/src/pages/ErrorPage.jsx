import { useRouteError } from "react-router-dom";
import { useNavigate } from 'react-router-dom'; 
import '../index.css';

export default function ErrorPage() { 
    const error = useRouteError();
    const navigate = useNavigate(); 

    return (
        <div id="ErrorPage">
            <div className="flex h-screen items-center justify-center bg-white">
                <div className="text-center">
                    <h1 className="text-9xl font-black text-gray-200">404</h1>
                    <p className="text-2xl font-bold tracking-tight text-black-900 sm:text-4xl">Oops!</p>
                    <p className="mt-4 text-white">Halaman yang anda cari tidak ditemukan!</p>
                    <p className="text-red-700 font-bold">
                        <i>{error.statusText || error.message}</i>
                    </p>
                    <button 
                        onClick={() => navigate('/login')} 
                        className="mt-6 inline-block rounded bg-black px-5 py-3 text-sm font-medium text-white hover:bg-gray-500  focus:outline-none focus:ring"
                    >
                        Go Back Home
                    </button>
                </div>
            </div>
            </div>
    );  
}