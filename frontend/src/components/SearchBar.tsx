import {ChangeEvent} from "react";
import {Box, Grid, TextField} from "@mui/material";
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
        <Box mb={2} mt={4}
            sx={{
                maxWidth: '100%'
            }}
        >
            <Grid container direction="row" alignItems="center" >
                <Grid item xs={0.5}>
                    <SearchIcon fontSize="large" />
                </Grid>
                <Grid item xs={11.5}>
                    <TextField fullWidth id="filled-required"
                               placeholder="search task via id, status or description "
                               label="search"
                               variant="filled"
                               onChange={onSearchTextChange} />

                </Grid>

            </Grid>
        </Box>
    )
}