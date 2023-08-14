import { Divider } from "@mui/material";
import React from "react"
import { Link } from "react-router-dom";

interface IProps {
    id: number;
    to: string;
    page: string;
    handleCloseNavMenu: any;
    pagesLength: number;
    pages?: any;
}

const NavLink = ({ id, to, pagesLength, page, handleCloseNavMenu, pages }: IProps) => {
    const openDropDown = () => {
        alert('sdjbfh')
    }
    return (
        <React.Fragment>
            <Link onMouseEnter={pages && openDropDown} to={to} onClick={handleCloseNavMenu}>
                {page}
                {
                    pages && ">"
                }
            </Link>
            {id !== pagesLength - 1 && (
                <Divider
                    sx={{
                        width: "1px",
                        height: "18px",
                        alignSelf: "center",
                        backgroundColor: "rgba(255,255,255,0.2)",
                    }}
                />
            )}
        </React.Fragment>
    )
}
export default NavLink
