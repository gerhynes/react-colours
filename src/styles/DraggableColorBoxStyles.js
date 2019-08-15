const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    textTransform: "uppercase",
    marginBottom: "-3.5px",
    "&:hover svg": {
      color: "#fff",
      transform: "scale(1.5)"
    }
  },
  boxContent: {
    position: "absolute",
    padding: "10px",
    width: "100%",
    left: "0",
    bottom: "0",
    color: "rgba(0,0,0,0.5)",
    letterSpacing: "1px",
    fontSize: "12px",
    textTransform: "uppercase",
    display: "flex",
    justifyContent: "space-between"
  },
  deleteIcon: {
    transition: "all 300ms ease-in-out"
  }
};

export default styles;
