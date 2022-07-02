import React from 'react'
import { GetInvolvedTabs } from './sub-components/Tabs/index.tsx';

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
                                        </li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <GetInvolvedTabs></GetInvolvedTabs>
            </div>
        </section>
    );
}

export {DiscoverComponent};
