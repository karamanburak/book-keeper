import { Button } from "@mui/material";
import { CiEdit } from "react-icons/ci";


const updateBook = () => {
    return (
        <div>
            <Button variant="contained" sx={{ bgcolor: "cornflowerblue" }}><CiEdit className='text-xl' /></Button>
        </div>
    )
};

export default updateBook;
