import {ChangeEvent} from "react";
import {Box, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {Search} from "@mui/icons-material";

type SearchBarProps = {
    onSearchTextChange(searchText: string): void
}


export default function SearchBar(props: SearchBarProps) {

    const onSearchTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        props.onSearchTextChange(event.target.value)
    }


    return (
        <Box mb={2}
            sx={{
                maxWidth: '100%'
            }}
        >
            <SearchIcon />
        <TextField fullWidth id="outlined-basic" placeholder="search task via id, status or description " label="search" variant="standard" onChange={onSearchTextChange} />
        </Box>


    )


}