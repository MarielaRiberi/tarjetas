import Seccion from "./components/Seccion";





const lista = [
    {
        id: 1,
        seccion: "Botellones de Agua ",
        texto: "Retornables IVESS",
        textoBoton: "COMPRAR",
        img: "https://www.somoselagua.com.ar/fotos/productos/2.jpg"
    },
    {
        id: 2,
        seccion: "Sifones de Soda Retornables",
        texto: "IVESS",
        textoBoton: "COMPRAR",
        img: "https://www.somoselagua.com.ar/fotos/productos/4.jpg"
    },
    {
        id: 3,
        seccion: "Botellas de Agua sin gas",
        texto: "IVESS",
        textoBoton: "COMPRAR",
        img: "https://www.somoselagua.com.ar/fotos/productos/1.jpg"
    },
    {
        id: 4,
        seccion: "Botellones de agua",
        texto: "descartables IVESS",
        textoBoton: "COMPRAR",
        img: "https://www.somoselagua.com.ar/fotos/productos/3.jpg"
    }
]




function App() {
    return (
        <>
        <Seccion lista = {lista} />
        </>
    );
}

export default App;