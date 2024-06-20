import Button from '@mui/material/Button';
import { useState } from 'react';
import NewBookModal from './NewBookModal';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [initialState, setInitialState] = useState({
        title: "",
        author: "",
        ISBN: "",
        genre: "",
        publicationYear: "",
        image: "",
    })

    return (
        <div>
            <div className="flex justify-between h-[80px] text-white bg-main-green items-center px-5 text-xl">
                <h2 className="font-bold size-[4re]">Book Store</h2>
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
