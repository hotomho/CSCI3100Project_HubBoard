import React, { useState } from "react";
import { InputBase } from "@mui/material";
import { styled, alpha } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import SearchResultList from "./SearchResultList";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const InputField = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

// dummy user list for testing
const fakeUserList = [{ name: "Sam" }, { name: "John" }, { name: "Joseph" }];

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [userList, setUserList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
    // TODO: get request to retrieve user list
    setUserList(fakeUserList);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <React.Fragment>
      <div onMouseOver={handleOpen} onMouseLeave={handleClose}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <InputField
            placeholder="Search friend here!!!"
            id="input"
            name="input"
            onChange={handleChange}
            value={input}
          />
          {isOpen && <SearchResultList results={fakeUserList} />}
        </Search>
      </div>
    </React.Fragment>
  );
};

export default SearchBar;
