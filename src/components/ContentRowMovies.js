import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */



function ContentRowMovies({categorias, usuarios, productos}){
   
    let moviesInDB = {
    title: 'Productos en Base de Datos',
    color: 'primary', 
    cuantity: productos,
    icon: 'fa-clipboard-list'
}

/* <!-- Total awards --> */

let totalAwards = {
    title:' Total de categorias', 
    color:'success', 
    cuantity: categorias,
    icon:'fa-award'
}

/* <!-- Actors quantity --> */

let actorsQuantity = {
    title:'Usuarios' ,
    color:'warning',
    cuantity:usuarios,
    icon:'fa-user-check'
}

let cartProps = [moviesInDB, totalAwards, actorsQuantity];
    if(categorias && usuarios && productos){
        return (
            
                <div className="row">
                    
                    {cartProps.map( (movie, i) => {

                        return <SmallCard {...movie} key={i}/>
                    
                    })}

                </div>
            )
    }else{
        return(
        <h4>cargando...</h4>
        )
    }
    
}

export default ContentRowMovies;