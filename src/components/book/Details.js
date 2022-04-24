import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch";
import { ContainerDetail } from "../../styles/detail";
import { Button } from "../button/Button";

export const Details = () => {

    const [book, setBook] = useState({});

    const { id } = useParams();
    const [ dataApi ] = useFetch();
    
    const getBookById = async() => {
        const response = await dataApi(`/book/${id}`, 'GET', {});
        console.log(response.data);
        setBook(response.data)
    }

    useEffect(() =>{
        getBookById();
    },[])

    return (
        <ContainerDetail>
            {
                book && (
                    <>
                        <div className="title-book">
                        <h2>{ book.title}</h2>
                        </div>
                        <div className="details">
                            <div className="author">Author: { book.author }</div>
                            <div className="genre">Genre: { book.name_genre }</div>
                            <div className="published">Published: { book.published_year }</div>
                            <div className="stock">Stock: 5</div>
                        </div>
                        <div className="borrowed">
                            <Button text='Borrewed' styled="warning" />
                        </div>
                    </>
                )
            }
            
        </ContainerDetail>
    )
}
