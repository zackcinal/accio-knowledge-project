import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link, Routes, Route } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import Students from "./Students";
import Staff from "./Staff";
import Spells from "./Spells";
import App from "./App";

export default () => (
  <div>
    <Tabs>
      <TabList>
        <Tab>STUDENTS</Tab>
        <Tab>SCHOOL STAFF</Tab>
        <Tab>SPELLS</Tab>
      </TabList>

      <TabPanel>
        <div>
          <Students />
        </div>
      </TabPanel>
      <TabPanel>
        <div>
          <Staff />
        </div>
      </TabPanel>
      <TabPanel>
        <div>
          <Spells />
        </div>
      </TabPanel>
    </Tabs>
    <div className="link-to">
      <nav>
        <Link to="/">Leave Hogwarts</Link>
      </nav>
      <Routes>
        <Route path="/"/>
      </Routes>
    </div>
  </div>
);
