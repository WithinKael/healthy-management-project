const selectStyles = {
  container: (provided) => ({
    ...provided,
    width: "100%",
  }),

  control: (provided, state) => {
    const isError = state.selectProps.errors;

    return {
      ...provided,
      display: "flex",
      height: "48px",
      padding: "12px 16px",
      alignItems: "center",
      flexShrink: "0",
      gap: "8px",
      alignSelf: "stretch",
      alignContent: "flex-start",
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

      "@media screen and (min-width: 768px)": {
        padding: "17px 16px",
        height: "56px",
      },

      "@media screen and (min-width: 1440px)": {
        padding: "19px 16px",
      },

      "@media screen and (min-width: 1920px)": {
        padding: "16px 16px",
      },
    };
  },

  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#161717",
    padding: "0",
  }),

  indicatorSeparator: () => ({
    display: "none",
  }),

  option: (provided) => ({
    ...provided,
    display: "flex",
    alignItems: "flex-start",
    fontSize: "14px",
    lineHeight: "1.43",
    fontWeight: "400",
    backgroundColor: "var(--background-white)",
    color: "#1B3641",

    "&:hover": {
      backgroundColor: "rgba(27, 54, 65, 0.2)",
      fontWeight: "600",
    },

    "@media screen and (min-width: 768px)": {
      fontSize: "15px",
      lineHeight: "1.47",
    },

    "@media screen and (min-width: 1920px)": {
      fontSize: "16px",
      lineHeight: "1.5",
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
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "1.43",
    textAlign: "start",
    flex: "1 0 0",
    color: "var(--primary-bluedark)",
    backgroundColor: "var(--background-white)",

    "@media screen and (min-width: 768px)": {
      fontSize: "15px",
      lineHeight: "1.47",
    },

    "@media screen and (min-width: 1920px)": {
      fontSize: "16px",
      lineHeight: "1.5",
    },
  }),

  valueContainer: (provided) => ({
    ...provided,
    padding: "0",
  }),

  placeholder: (provided) => ({
    ...provided,
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "1.43",
    color: "var(--typography-bluedark)",

    "@media screen and (min-width: 768px)": {
      fontSize: "15px",
      lineHeight: "1.47",
    },

    "@media screen and (min-width: 1440px)": {
      lineHeight: "1.2",
    },

    "@media screen and (min-width: 1920px)": {
      fontSize: "16px",
      lineHeight: "1.5",
    },
  }),
};

export default selectStyles;
