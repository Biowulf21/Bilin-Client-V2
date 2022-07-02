import React, { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap';

const GetInvolvedTabs = () =>{
    const [key, setKey] = useState('Events');
    return(
        <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 nav nav-pills nav-fill"
      >
        <Tab className="" eventKey="Events" title="Events">
            <h1>EVENTS</h1>
        </Tab>
        <Tab className="" eventKey="Organizations" title="Organizations">
            <h1>ORGANIZATIONS</h1>
        </Tab>
        <Tab className="" eventKey="Pantries" title="Pantries">
            <h1>PANTRIES</h1>
        </Tab>
      </Tabs>
    );
}

export {GetInvolvedTabs}