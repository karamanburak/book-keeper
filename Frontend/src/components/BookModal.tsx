import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { IBook, IInitialState } from '../models/models';
import { Button, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { useState } from 'react';
import useBookCall from '../hooks/useBookCall';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: 300, sm: 600 },
    maxHeight: '100vh',
    bgcolor: '#baebebf2',
    boxShadow: 24,
    borderRadius: 5,
    p: 5,
    overflowY: 'hidden',
};
const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    maxHeight: '70vh',
    overflowY: 'scroll',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
        display: 'none',
    },
};

interface INewBookComp {
    open: boolean,
    handleClose: () => void,
    initialState: IInitialState;
}

const BookModal: React.FC<INewBookComp> = ({ open, handleClose, initialState }) => {
    const [info, setInfo] = useState<IInitialState>(initialState)
    const { postBook, putBook } = useBookCall()


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (info._id) {
            putBook(info as IBook)
        } else {
            postBook(info as IBook)
        }
        handleClose()
        setInfo(initialState)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value });
    }

    const handleSelectChange = (e: SelectChangeEvent<number>) => {
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value as number });
    }




    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={formStyle}>
                    <TextField
                        label="Book Name"
                        name="title"
                        id="title"
                        type="text"
                        variant="outlined"
                        onChange={handleInputChange}
                        value={info.title}
                        color="success"
                    />
                    <TextField
                        label="Author Name"
                        name="author"
                        id="author"
                        type="text"
                        variant="outlined"
                        onChange={handleInputChange}
                        value={info.author}
                        color="success"
                    />
                    <TextField
                        label="ISBN"
                        name="ISBN"
                        id="ISBN"
                        type="number"
                        variant="outlined"
                        onChange={handleInputChange}
                        value={info.ISBN}
                        color="success"
                    />
                    <InputLabel id="demo-simple-publicationYear-label">Publication Year</InputLabel>
                    <Select
                        labelId="demo-simple-publicationYear-label"
                        label="Publication Year"
                        id="publicationYear"
                        name="publicationYear"
                        onChange={handleSelectChange}
                        value={info.publicationYear}
                        color="success"
                        type="number"
                    >
                        {/* <MenuItem value={2024}><em></em></MenuItem>
                        <MenuItem value={2024}>2024</MenuItem>
                        <MenuItem value={2023}>2023</MenuItem>
                        <MenuItem value={2022}>2022</MenuItem>
                        <MenuItem value={2021}>2021</MenuItem>
                        <MenuItem value={2020}>2020</MenuItem>
                        <MenuItem value={2019}>2019</MenuItem>
                        <MenuItem value={2018}>2018</MenuItem> */}

                        {[...Array(174)].map((_, index) =>
                            <MenuItem key={2024 - index} value={2024 - index}>{2024 - index}</MenuItem>
                        )}
                    </Select>
                    <TextField
                        label="Genre"
                        name="genre"
                        id="genre"
                        type="text"
                        variant="outlined"
                        onChange={handleInputChange}
                        value={info.genre}
                        color="success"
                    />
                    <TextField
                        label="Book Image"
                        name="image"
                        id="image"
                        type="text"
                        variant="outlined"
                        onChange={handleInputChange}
                        value={info.image}
                        color="success"
                    />
                    <Button
                        variant="contained"
                        type="submit"
                        sx={{ backgroundColor: "red" }}
                    >
                        {info._id ? "Edit Book" : "Create New Book"}
                    </Button>
                </Box>
            </Box>
        </Modal >
    )
};

export default BookModal;
