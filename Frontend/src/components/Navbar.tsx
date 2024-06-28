import Button from '@mui/material/Button';
import { useState } from 'react';
import NewBookModal from './NewBookModal';
import { IInitialState } from '../models/models';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [initialState] = useState<IInitialState>({
        title: "",
        author: "",
        ISBN: 0,
        genre: "",
        publicationYear: 0,
        image: "",
    })



    return (
        <div>
            <div className="flex justify-between h-[80px] w-full text-white bg-main-green items-center px-5 text-xl ">
                <h2 className="font-bold size-[4re] ">Book Keeper</h2>
                <Button sx={{ color: "white", fontWeight: "bold" }} onClick={handleOpen}>Add New Book</Button>
            </div>
            <NewBookModal
                open={open}
                handleClose={handleClose}
                initialState={initialState}

            />
        </div>
    );
};

export default Navbar;
