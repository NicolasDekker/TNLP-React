import React from "react";

function GenresInDb({categorias}) {
  if(categorias){
    return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
          Categorias
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6 mb-4">
              {Object.keys(categorias).map(row => {
              return(
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">{row}: {categorias[row]}</div>
                </div>
              )
            })}              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }else{
    return(
      <h4>cargando...</h4>
    )
  }
}

export default GenresInDb;
