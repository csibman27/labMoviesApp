import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const styles = {
    root: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        marginBottom: 1.5,
    },
};

interface HeaderProps {
    title: string;
    currentPage: number;
    setCurrentPage: (page: number) => void;
    totalPages: number;
}

const Header: React.FC<HeaderProps> = ({ title, currentPage, setCurrentPage, totalPages }) => {

    const handleGoBack = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleGoForward = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <Paper component="div" sx={styles.root}>
            <IconButton 
                disabled={currentPage === 1} 
                aria-label="go back" 
                onClick={handleGoBack}
            >
                <ArrowBackIcon color={currentPage === 1 ? "disabled" : "primary"} fontSize="large" />
            </IconButton>

            <Typography variant="h4" component="h3">
                {title}
            </Typography>

            <IconButton 
                disabled={currentPage === totalPages} 
                aria-label="go forward" 
                onClick={handleGoForward}
            >
                <ArrowForwardIcon color={currentPage === totalPages ? "disabled" : "primary"} fontSize="large" />
            </IconButton>
        </Paper>
    );
};

export default Header;
