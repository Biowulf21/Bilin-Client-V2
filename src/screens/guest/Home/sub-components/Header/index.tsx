import React, { Component } from 'react'

const Home_Header = () => {
    return (
    <section className="header bg-color1 align-items-center text-center text-md-start" style={{width: "100%;"}}>
    <div className="container">
        <div className="d-md-flex align-items-center justify-content-between">
            <div className="p-4">
                <h1 className="h1s" >Get involved in solving food hunger</h1>
                <p className="ps my-3">By empowering those who empower others, we at Bilin are
                    trying to spark the Filipino spirit of Bayanihan like never before.</p>
                <button className="btns text-color2" style={{border: "0px", backgroundColor: "#F77F00;"}}
                    data-bs-target="#modal-partner" data-bs-toggle="modal">Partner With
                    Us</button>
                <button className="btns text-color1" style={{border: "0px;",  backgroundColor: "#f8d9b5;"}}
                data-bs-target="#modal-donor" data-bs-toggle="modal">Donate</button>
                </div>
                <img className="img-fluid w-50 d-none d-md-block" src="../../assets/images/donation.png" alt=""/>
            </div>
        </div>
    </section>);
}

export {Home_Header};