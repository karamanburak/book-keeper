import { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { fetchFail, fetchStart, getSuccessBook } from "../features/booksSlice";
import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { IBook } from "../models/models";



const useBookCall = () => {
    // const PORT = import.meta.env.VITE_PORT
    const [search, setSearch] = useState("");
    const dispatch = useAppDispatch();

    const getData = async () => {
        dispatch(fetchStart());
        try {
            const { data } = await axios(
                `https://book-keeper-cicn.onrender.com/books/search?q=${search}`
            );
            // const { data } = await axios(`https://book-keeper-cicn.onrender.com/books/`)
            dispatch(getSuccessBook(data.post));
            // console.log(data.post);
        } catch (error) {
            console.log(error);
            dispatch(fetchFail());
        }
    };

    const postBook = async (info: IBook) => {
        dispatch(fetchStart());
        try {
            const { data } = await axios.post(`https://book-keeper-cicn.onrender.com/books/post`, info)
            toastSuccessNotify("Book successfully added")
            console.log(data);

        } catch (error) {
            console.log(error);
            toastErrorNotify("Uppss! Book could not be added!")

        } finally {
            getData()
        }
    }
    const putBook = async (info: IBook) => {
        dispatch(fetchStart());
        try {
            const { data } = await axios.put(`https://book-keeper-cicn.onrender.com/books/post/${info._id}`, info)
            console.log(data);

            toastSuccessNotify("Book successfully edited")

        } catch (error) {
            console.log(error);
            toastErrorNotify("Uppss! Book could not be edited!")

        } finally {
            getData()
        }
    }

    const handleDelete = async (id: string) => {
        try {
            await axios.delete(`https://book-keeper-cicn.onrender.com/books/post/${id}`);
            getData()
        } catch (error) {
            console.error("Failed to delete the book:", error);
        }
    };


    return {
        getData,
        postBook,
        putBook,
        handleDelete,
        search,
        setSearch,
    }
};

export default useBookCall;
