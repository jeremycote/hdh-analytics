import {cardTitle, container, title} from "assets/jss/material-kit-react.js";
import imagesStyle from "../imagesStyles";

const privacyPageStyle = {
    container: {
        zIndex: "12",
        color: "#FFFFFF",
        ...container,
    },
    title: {
        ...title,
        display: "inline-block",
        position: "relative",
        marginTop: "30px",
        minHeight: "32px",
        color: "#FFFFFF",
        textDecoration: "none",
    },
    subtitle: {
        fontSize: "1.313rem",
        maxWidth: "500px",
        margin: "10px auto 0",
    },
    main: {
        background: "#FFFFFF",
        position: "relative",
        zIndex: "3",
    },
    mainRaised: {
        margin: "-60px 30px 0px",
        borderRadius: "6px",
        boxShadow:
            "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    },
    section: {
        padding: "70px 0",
        textAlign: "center",
    },
    projectTitle: {
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
        color: "#000000",
        textAlign: "left",
        fontSize: "1.4em"
    },
    justifyCenter: {
        justifyContent: "center !important",
    },
    margin5: {
        margin: "5px",
    }
};

export default privacyPageStyle;
