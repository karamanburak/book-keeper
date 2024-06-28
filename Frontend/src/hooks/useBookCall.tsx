import { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { fetchFail, fetchStart, getSuccessBook } from "../features/booksSlice";
import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { IBook } from "../models/models";



const useBookCall = () => {
    const PORT = import.meta.env.VITE_PORT || 8000
    const [search, setSearch] = useState("");
    const dispatch = useAppDispatch();

    const getData = async () => {
        dispatch(fetchStart());
        try {
            const { data } = await axios(
                `http://127.0.0.1:${PORT}/books/search?q=${search}`
            );
            // const { data } = await axios(`http://127.0.0.1:${PORT}/books/`)
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
            const data = await axios.post(`http://127.0.0.1:${PORT}/books/post`, info)
            toastSuccessNotify("Book successfully added")
            console.log(data);

        } catch (error) {
            console.log(error);
            toastErrorNotify("Uppss! Book could not be added!")

        } finally {
            getData()
        }
    }

    const handleDelete = async (id: string) => {
        try {
            await axios.delete(`http://127.0.0.1:${PORT}/books/post/${id}`);
            getData()
        } catch (error) {
            console.error("Failed to delete the book:", error);
        }
    };


    return {
        getData,
        postBook,
        handleDelete,
        search,
        setSearch,
    }
};

export default useBookCall;
