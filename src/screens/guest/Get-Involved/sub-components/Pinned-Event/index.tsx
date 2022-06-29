import React from 'react'

function PinnedEvent() {
    return (
        <div>
            <div>
        <section style={{padding: "16px;"}}>
        <div className="container pt-2 pt-lg-5">
            <div className="row">
                <div className="d-flex justify-content-center">
                    <div>
                        <h3 className="h3s"><b><i className="bi bi-pin-fill"></i>Pinned Event</b></h3>
                        <div className="">
                            <img className="img-fluid" style={{border: "10px;"}} src="../assets/images/pinnedevent.png"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
    </div>
    );
}

export  {PinnedEvent};