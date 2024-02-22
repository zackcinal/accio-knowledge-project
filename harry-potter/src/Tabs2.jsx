import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link, Routes, Route } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import Books from "./Books.jsx";
import Movies from "./Movies.jsx";

export default () => (
  <div>
    <Tabs>
      <TabList>
        <Tab>BOOKS</Tab>
        <Tab>MOVIES</Tab>
      </TabList>

      <TabPanel>
        <div>
          <Books />
        </div>
      </TabPanel>
      <TabPanel>
        <div>
          <Movies />
        </div>
      </TabPanel>
    </Tabs>
    <div className="link-to">
      <nav>
        <Link to="/">Close Tab</Link>
      </nav>
      <Routes>
        <Route path="/"/>
      </Routes>
    </div>
  </div>
);
