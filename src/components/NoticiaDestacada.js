/*
Desarrollar un componente llamado NoticiaDestacada que reciba como
props un título, contenido y fecha de publicación de una noticia, y los
muestre con una estructura similar a una tarjeta de blog.
*/

export default function NoticiaDestacada(props){
    return(
        <div className="tarjeta-noticia">
            <h2>{props.tituloNoticia}</h2>
            <p className="contenido-noticia">{props.contenidoNoticia}</p>
            <p className="fecha-noticia">{props.fechaPublicacion}</p>
        </div>
    )
}