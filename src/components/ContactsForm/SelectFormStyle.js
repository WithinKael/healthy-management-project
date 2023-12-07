const selectStyles = {
  control: (provided, state) => {
    const isError = state.selectProps.errors;

    return {
      ...provided,
      display: "flex",
      width: "668px",
      height: "56px",
      marginTop: "8px",
      padding: "0px 16px",
      alignItems: "center",
      flexShrink: "0",
      alignSelf: "stretch",
      borderRadius: "16px",
      outline: "none",
      border: `1px solid ${isError ? "var(--secondary-red)" : "transparent"}`,
      backgroundColor: "var(--background-white)",
      boxShadow: "0px 0px 8px 0px rgba(27, 54, 65, 0.08)",

      "&:hover": {
        boxShadow: "0px 0px 16px 0px rgba(27, 54, 65, 0.16)",
      },
      "&:focus": {
        outline: "none",
        border: "1px solid var(--typography-grey)",
        background: "var(--background-white)",
        boxShadow: "0px 0px 8px 0px rgba(27, 54, 65, 0.08)",
      },
    };
  },

  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#062136",
  }),

  indicatorSeparator: () => ({
    color: "red",
  }),

  option: (provided) => ({
    ...provided,
    display: "flex",
    alignItems: "flex-start",
    fontWeight: "400",
    backgroundColor: "var(--background-white)",
    color: "#1B3641",
    "&:hover": {
      backgroundColor: "rgba(27, 54, 65, 0.2)",
      borderRadius: "16px",
      fontWeight: "600",
    },
  }),

  menu: (provided) => ({
    ...provided,
    height: "auto",
    marginTop: "0",
    border: "none",
    borderRadius: "16px",
    boxShadow: "0px 0px 8px 0px rgba(27, 54, 65, 0.08)",
    color: "var(--primary-bluedark)",
    backgroundColor: "var(--background-white)",
  }),
  singleValue: (provided) => ({
    ...provided,
    fontSize: "16px",
    fontWeight: "400",
    color: "var(--primary-bluedark)",
  }),
};

export default selectStyles;
