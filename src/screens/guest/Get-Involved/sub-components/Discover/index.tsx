import React from 'react'

const DiscoverComponent = () => {
    return (
        <section style={{padding: "16px;"}}>
            <div className="container pt-lg-3">
                <div className="row">
                    <div className="d-flex justify-content-between">
                        <h3 className="h3s"><b>Discover</b></h3>
                        <div className="d-md-none d-inline btn-group">
                            <div className="nav-item dropdown">
                                <a className="btn nav-link dropdown-toggle text-color3 p-0" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Upcoming Events</a>
                                <ul className="dropdown-menu">
                                    <div className="nav" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link pill-link text-color6" id="pills-events-tab" style={{backgroundColor: "white;"}} data-bs-toggle="pill" data-bs-target="#pills-events" role="tab" aria-controls="pills-events" aria-selected="true">Upcoming Events</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link pill-link text-color6" id="pills-orgs-tab" data-bs-toggle="pill" data-bs-target="#pills-orgs" role="tab" aria-controls="pills-orgs" aria-selected="false">Organizations</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link pill-link text-color6" id="pills-cps-tab" data-bs-toggle="pill" data-bs-target="#pills-cps" role="tab" aria-controls="pills-cps" aria-selected="false">Community Pantries</a>
                                        </li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link pill-link text-color6" id="pills-bookmarked-tab" data-bs-toggle="pill" data-bs-target="#pills-bookmarked" role="tab" aria-controls="pills-bookmarked" aria-selected="false">Bookmarked</a>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
        
        
                    
                    <div className="d-none d-md-inline">
                        <ul className="nav nav-pills mb-4 bg-color2" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                              <button className="nav-link pill-link active rounded-pill mx-1" style={{backgroundColor: "#E5E7E7;", color: "#5C5B5B;", fontWeight: "500;"}} id="pills-events-tab" data-bs-toggle="pill" data-bs-target="#pills-events" type="button" role="tab" aria-controls="pills-events" aria-selected="true">Upcoming Events</button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button className="nav-link pill-link rounded-pill mx-1" style={{backgroundColor: "#E5E7E7;" , color: "#5C5B5B;",  fontWeight: "500;"}} id="pills-orgs-tab" data-bs-toggle="pill" data-bs-target="#pills-orgs" type="button" role="tab" aria-controls="pills-orgs" aria-selected="false">Organizations</button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button className="nav-link pill-link rounded-pill mx-1"style={{backgroundColor: "#E5E7E7;" , color: "#5C5B5B;",  fontWeight: "500;"}} id="pills-cps-tab" data-bs-toggle="pill" data-bs-target="#pills-cps" type="button" role="tab" aria-controls="pills-cps" aria-selected="false">Community Pantries</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link pill-link rounded-pill mx-1" style={{backgroundColor: "#E5E7E7;" , color: "#5C5B5B;",  fontWeight: "500;"}} id="pills-bookmarked-tab" data-bs-toggle="pill" data-bs-target="#pills-bookmarked" type="button" role="tab" aria-controls="pills-bookmarked" aria-selected="false">Bookmarked</button>
                            </li>
                        </ul>
                    </div>
    
                    <div className="tab-content py-5" id="pills-tabContent">
                        <div   className="tab-pane fade show active" id="pills-events" role="tabpanel" aria-labelledby="pills-events-tab">
                            <div id="events-tab" className="container text-center">
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-orgs" role="tabpanel" aria-labelledby="pills-orgs-tab">
                            <div className="container text-center">
                                <p>There are no organizations added yet.
                                </p>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-cps" role="tabpanel" aria-labelledby="pills-cps-tab">
                            <div className="container text-center">
                                <p>There are no community pantries added yet.
                                </p>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-bookmarked" role="tabpanel" aria-labelledby="pills-bookmarked-tab">
                            <div className="container text-center">
                                <p>Looks like you haven't bookmarked anything yet.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export {DiscoverComponent};
