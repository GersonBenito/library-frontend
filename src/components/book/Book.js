import { useNavigate } from 'react-router-dom';
import '../../styles/book.css';

export const Book = ({ id_book, id_genre, title, author, published_year, name_genre }) => {

    const navigate = useNavigate();

    const showDetails = () =>{
        navigate(`/layout/detail/${id_book}`);
    }

    return (
        <div className="card">
            <div className="body-card">
                <div className="titulo-card">
                    <p>{ title } - <span>{name_genre}</span></p>
                </div>
                <div className="detalles">
                    <div className="precio subtitulo">
                        <p>Author: <span>{ author }</span></p>
                    </div> |
                    <div className="destino subtitulo">
                        <p>Publised: <span>{ published_year }</span></p>
                    </div>
                </div>
            </div>
            <div className="container-boton">
                <button type="button" onClick={showDetails}>Details</button>
            </div>
        </div>
    )
}
