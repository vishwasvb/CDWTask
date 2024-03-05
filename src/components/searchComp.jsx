import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchContainer = ({
  placeholder,
  onSearch,
  // margin,
  // marginTop,
  // marginBottom,
  // marginLeft,
  // marginRight,
  sx,
}) => {
  const searchContainerStyles = {
    position: "relative",
    borderRadius: "4px",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    border: "1px solid #1976d2", // Border color set to #1976d2
    color: "#1976d2", // Text color set to #1976d2
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.25)",
    },
    ...sx,
  };

  const searchIconWrapperStyles = {
    padding: "0 16px",
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const inputStyles = {
    color: "inherit",
    // width: "100%",
    border: "0px",
    padding: "8px",
    paddingLeft: "calc(1em + 32px)",
    transition: "width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  };

  return (
    <div style={searchContainerStyles}>
      <div style={searchIconWrapperStyles}>
        <SearchIcon />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        aria-label="search"
        style={inputStyles}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchContainer;
