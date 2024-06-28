import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide, { SlideProps } from '@mui/material/Slide';
import { MdDeleteOutline } from "react-icons/md";
import useBookCall from '../hooks/useBookCall';

interface IDeleteCard {
    id: string;
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    handleClose: () => void;

}

const Transition = React.forwardRef<HTMLDivElement, SlideProps>(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const DeleteBookCard: React.FC<IDeleteCard> = ({ id, open, setOpen, handleClose }) => {
    const { handleDelete } = useBookCall()


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleDeleteAndClose = async (id: string) => {
        await handleDelete(id)
        setOpen(false);
    };


    return (
        <React.Fragment>
            <Button variant="contained" sx={{ bgcolor: "red" }} onClick={handleClickOpen}>
                <MdDeleteOutline className='text-xl' />
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Confirm Delete"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Are you sure you want to delete this book?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button sx={{ color: 'gray' }} onClick={handleClose}>Cancel</Button>
                    <Button sx={{ color: 'red' }} onClick={() => handleDeleteAndClose(id)}>Delete</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment >
    );
}

export default DeleteBookCard