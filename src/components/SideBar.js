import React, { useEffect, useState } from 'react';
import image from '../assets/images/logo-DH.png';
import ContentWrapper from './ContentWrapper';
import SearchMovies from './SearchMovies';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
import ContentRowMovies from './ContentRowMovies';
import NotFound from './NotFound';
import {Link, Route, Switch} from 'react-router-dom';


function SideBar(){
    let [infoProductos, setInfoProductos] = useState({});
    let [infoUsuarios, setInfoUsuarios] = useState({});
    let [infoDetail, setInfoDetail] = useState({});

    const fetchProducts = async () =>{
        const responseApi = await fetch('http://localhost:3001/api/products')
        const info = await responseApi.json()
        const responseApiDetail = await fetch('http://localhost:3001/api/products/' + info.products[info.products.length - 1].id)
        const infoDetail = await responseApiDetail.json()
        setInfoDetail(infoDetail)
        setInfoProductos(info)
    }
    const fetchUsuarios = async () =>{
        const responseApi = await fetch('http://localhost:3001/api/users')
        const info = await responseApi.json()
        console.log(info);
        setInfoUsuarios(info)
    }

    useEffect(()=> {
        fetchProducts()
        fetchUsuarios()
    },[])

    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - DH movies</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Acciones</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                <Link className="nav-link" to="/GenresInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Categorias</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/LastMovieInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Ultimo Producto</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/ContentRowMovies">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tablas</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}

            {/*<!-- Microdesafio 1 -->*/}
            {/*<!--<Route exact path="/">
                <ContentWrapper />
            </Route>
            <Route path="/GenresInDb">
                <GenresInDb />
            </Route>
            <Route path="/LastMovieInDb">
                <LastMovieInDb />
            </Route>
            <Route path="/ContentRowMovies">
                <ContentRowMovies />
            </Route>*/}
            {/*<!-- End Microdesafio 1 -->*/}

            {/*<!-- End Microdesafio 2 -->*/}
            <Switch>
                <Route exact path="/">
                    <ContentWrapper categorias={infoProductos.countByCategory} productos={infoProductos.count} usuarios={infoUsuarios} producto={infoDetail}/>
                </Route>
                <Route path="/GenresInDb" >
                    <GenresInDb categorias={infoProductos.countByCategory} />
                </Route>
                <Route path="/SearchMovies">
                    <SearchMovies />
                </Route>
                <Route path="/LastMovieInDb">
                    <LastMovieInDb producto={infoDetail}/>
                </Route>
                <Route path="/ContentRowMovies">
                    <ContentRowMovies categorias={Object.keys(infoProductos.countByCategory == undefined ? {} : infoProductos.countByCategory).length} productos={infoProductos.count} usuarios={infoUsuarios.count}/>
                </Route>
                <Route component={NotFound} />
            </Switch>
            {/*<!-- End Microdesafio 2 -->*/}
        </React.Fragment>
    )
}
export default SideBar;