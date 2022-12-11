import Boton from "./Boton";


const Tarjeta = (props) => {
    return (
        <figure
        style={{
            width: "250px",
            height: "300px",
            textAlign: "center",
            display: "Flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            fontSize: "100%",
            color: "#2bace2",
            verticalAlign: "baseline",
            fontFamily: "monserrat, sans-serif",
            fontWeight: "700"
        }}
        >
            <img src={props.objeto.img} alt=""/>
            <figcaption>
                <p>{props.objeto.seccion}</p>
                <p> {props.objeto.texto}</p>
            </figcaption>
            <Boton objeto={props.objeto}/>
        </figure>
    )
};

export default Tarjeta