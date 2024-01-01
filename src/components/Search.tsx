import React, { useState } from "react";
import { Paper, TextField } from "@mui/material";

export type searchProps = {
    onSearch: (query: string) => void;
}

const Search = ({onSearch}: searchProps) => {
    const [searchText, setSearchText] = useState<string>('');

    const handleChange = (value: string) => {
        setSearchText(value);
    }

    const handleSearch = (e: any) => {
        e.preventDefault();
        onSearch(searchText);
        setSearchText('')
    };

  return (
    <Paper elevation={6} sx={{ padding: "25px" }}>
      <form onSubmit={(e: any) => handleSearch(e)}>
        <TextField fullWidth label="Search" onChange={(e: any) => handleChange(e.target.value)} value={searchText} />
      </form>
    </Paper>
  );
};

export default Search;
