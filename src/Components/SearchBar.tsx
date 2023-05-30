import { Card, IconButton } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';

const SearchBar = (props:any) => {
    const [searchValue, setSearchValue] = useState("");

    const handleChangeSearch = (e:any) => {
        setSearchValue(e.target.value)
    }
 
    const searchForStock = () => {
        console.log(searchValue)
    }

    return(
        <Card sx={{padding: '5px'}}>
            <TextField onChange={handleChangeSearch} placeholder="APPL" variant="standard" style={{textTransform:"uppercase"}}  />
            <IconButton onClick={searchForStock}>
                <AddCircleIcon />
            </IconButton>
        </Card>
    )
}

export default SearchBar;