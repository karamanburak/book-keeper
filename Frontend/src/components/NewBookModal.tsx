import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { IInitialState } from '../models/models';
import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useState } from 'react';
import useBookCall from '../hooks/useBookCall';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface INewBookComp {
    open: boolean,
    handleClose: () => void,
    initialState: IInitialState;
}

const NewBookModal: React.FC<INewBookComp> = ({ open, handleClose, initialState }) => {
    const [info, setInfo] = useState(initialState)
    const { postBook } = useBookCall()


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        postBook(info)
        handleClose()
        setInfo(initialState)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setInfo({ ...info, [e.target.name]: e.target.value })
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
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <TextField
                        label="Book Name"
                        name="title"
                        id="title"
                        type="text"
                        variant="outlined"
                        onChange={handleChange}
                        value={info.title}
                        color="success"
                    />
                    <TextField
                        label="Author Name"
                        name="author"
                        id="author"
                        type="text"
                        variant="outlined"
                        onChange={handleChange}
                        value={info.author}
                        color="success"
                    />
                    <TextField
                        label="ISBN"
                        name="ISBN"
                        id="ISBN"
                        type="number"
                        variant="outlined"
                        onChange={handleChange}
                        value={info.ISBN}
                        color="success"
                    />
                    <InputLabel id="demo-simple-publicationYear-label">Publication Year</InputLabel>
                    <Select
                        labelId="demo-simple-publicationYear-label"
                        label="Publication Year"
                        id="publicationYear"
                        name="publicationYear"
                        onChange={handleChange}
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
                        onChange={handleChange}
                        value={info.genre}
                        color="success"
                    />
                    <TextField
                        label="Book Image"
                        name="image"
                        id="image"
                        type="text"
                        variant="outlined"
                        onChange={handleChange}
                        value={info.image}
                        color="success"
                    />
                    <Button
                        variant="contained"
                        type="submit">
                        Create New Book
                    </Button>
                </Box>
            </Box>
        </Modal >
    )
};

export default NewBookModal;
