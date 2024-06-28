import SearchComp from "../components/SearchComp";
// import { CiEdit } from "react-icons/ci";
// import { Button } from "@mui/material";
import { useAppSelector } from "../app/hooks";
import { EventFunc } from "../models/models";
import useBookCall from "../hooks/useBookCall";
import { useEffect, useState } from "react";
import DeleteBookCard from "../components/DeleteBookCard";
import UpdateBook from "../components/UpdateBook";


const Home = () => {
    const { loading, error, booksList } = useAppSelector(state => state.books)
    const { getData, search, setSearch } = useBookCall()
    const [open, setOpen] = useState(false);


    useEffect(() => {
        getData()
    }, [search])

    //! 1. way
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setSearch(e.target.value);
    // }

    //! 2. way clean code import from (models.ts)
    const handleChange: EventFunc = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div>
            <SearchComp handleChange={handleChange} />
            {loading ? (
                <p className="text-center text-red-600">Books loading...</p>
            ) : (
                error ? (
                    <p className="text-center text-red-600">Something went wrong...</p>
                ) : (
                    <div className=" flex justify-center items-stretch gap-6 mt-6 flex-wrap">
                        {booksList.map((book, i) => (
                            <div key={i} className="w-full max-w-sm bg-white border text-center rounded-lg flex  flex-col justify-between">
                                <div>
                                    <h5 className="my-4 text-2xl font-bold tracking-tight text-blue-400 dark:text-white">{book.title}</h5>
                                    <img className="object-contain w-full rounded-t-lg h-80 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg m-auto mt-4" src={book.image} alt="" />
                                </div>
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="my-4 text-2xl font-bold tracking-tight text-red-400 dark:text-white"> {book.author}</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> <span className="font-bold">ISBN:</span> {book.ISBN}</p>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-bold">Publication Year: </span> {book.publicationYear}</p>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-bold">Genre: </span> {book.genre}</p>
                                </div>
                                <div className="flex justify-center gap-3 pb-4">
                                    {/* <Button variant="contained"> <CiEdit className="size-6" /></Button> */}
                                    {/* <button> <MdDeleteOutline className="size-8 hover:text-red-700" /></button> */}
                                    <UpdateBook />
                                    <DeleteBookCard
                                        id={book._id}
                                        open={open}
                                        setOpen={setOpen}
                                    />
                                </div>
                            </div>
                        )
                        )}
                    </div>
                )

            )
            }
            <div className="p-6"></div>
        </div>
    );
};

export default Home;
