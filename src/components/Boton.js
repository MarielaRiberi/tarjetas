

const Boton = (props) => {
    return (
        <button
        style={{
            backgroundColor: "#2bace2",
            display: "inline-block",
            color: "#fff",
            border: "1px solid transparent",
            borderRadius: "0.25rem",
            padding: "4px 4px",
            fontSize: "0.75rem",
            width: "80%",
            margin: "0px auto",
            fontWeight: "700",
            textAling: "center",
            lineHeigth: "1.5"
        }}
        >{props.objeto.textoBoton}</button>
    )
}

export default Boton;