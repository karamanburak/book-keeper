import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex justify-between h-[80px] text-white bg-main-green items-center px-5 text-xl">
            <h2 className="font-bold size-[4re]">Book Store</h2>
            <div>
                <Link to="/" className="mr-10">Home</Link>
                <Link to="" >Add New Book</Link>
            </div>
        </div>
    )
};

export default Navbar;
