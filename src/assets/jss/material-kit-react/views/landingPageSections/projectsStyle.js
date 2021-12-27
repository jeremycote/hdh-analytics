import { cardTitle, title } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const teamStyle = {
    section: {
        padding: "70px 0",
        textAlign: "center",
    },
    title: {
        ...title,
        marginBottom: "1rem",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none",
    },
    ...imagesStyle,
    itemGrid: {
        marginLeft: "auto",
        marginRight: "auto",
    },
    cardTitle,
    smallTitle: {
        color: "#6c757d",
    },
    description: {
        color: "#999",
    },
    justifyCenter: {
        justifyContent: "center !important",
    },
    margin5: {
        margin: "5px",
    },
    download: {
        height: "4em",
    },
    downloadAndroid: {
        height: "6em",
    }

};

export default teamStyle;
