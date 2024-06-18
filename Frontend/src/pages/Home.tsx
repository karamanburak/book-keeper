import { useEffect, useState } from "react";
import SearchComp from "../components/SearchComp";
import axios from 'axios'
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";




const Home = () => {
    const [data, setData] = useState([])
    console.log(data);


    const getData = async () => {
        const { data } = await axios("http://127.0.0.1:8000/books")
        setData(data.post)
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <div>
            <SearchComp />
            <div className=" flex justify-center items-stretch gap-6 mt-6 flex-wrap">
                {data.map((data) => (
                    <div key={data._id} className="w-full max-w-sm bg-white border text-center rounded-lg flex  flex-col justify-between">
                        <div>
                            <img className="object-contain w-full rounded-t-lg h-80 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg m-auto mt-4" src={data.image} alt="" />
                        </div>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> <span className="font-bold">ISBN:</span> {data.ISBN}</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-bold">Publication Year: </span> {data.publicationYear}</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-bold">Genre: </span> {data.genre}</p>
                        </div>
                        <div className="flex justify-center gap-3 pb-4">
                            <button> <CiEdit className="size-8 hover:text-red-700" /></button>
                            <button> <MdDeleteOutline className="size-8 hover:text-red-700" /></button>
                        </div>
                    </div>
                )
                )}
            </div>
            <div className="p-6"></div>
        </div>
    );
};

export default Home;
