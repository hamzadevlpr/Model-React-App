import React from 'react'
import hero_model from '../Assets/main-model.png'
import '../Hero_Section/Hero.css'

export default function Hero() {
    return (
        <>
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 cont ">
                <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                    <img className="rounded-lg-3" src={hero_model} alt="" width={325} height={454} />
                </div>
                <div className="col-lg-6 p-3 p-lg-5 pt-lg-3">
                    <h1 className="headline display-4 fw-bold lh-1">Book the Best Pakistani Models</h1>
                    <p className="lead">Choose more than 1 M+ Models for your brand - Catalog, Commercial, Promotional, & More </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <button type="button" className="btn shortlist-btn btn-lg px-4 me-md-2 fw-bold">Become a Model</button>
                        <button type="button" className="btn signup-btn btn-lg px-4">Book a Model</button>
                    </div>
                </div>

            </div>
        </>
    )
}
