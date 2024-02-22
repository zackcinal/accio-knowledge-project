import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Students from './Students';
import Staff from './Staff'
import Spells from './Spells';
import FilteredStudents from './FilteredStudents';


export default () => (
  <Tabs>
    <TabList>
      <Tab>STUDENTS</Tab>
      <Tab>SCHOOL STAFF</Tab>
      <Tab>SPELLS</Tab>
      <Tab>SEARCH</Tab>
    </TabList>

    <TabPanel>
      <div><Students /></div>
    </TabPanel>
    <TabPanel>
      <div><Staff /></div>
    </TabPanel>
    <TabPanel>
      <div><Spells /></div>
    </TabPanel>
    <TabPanel>
      <div><FilteredStudents /></div>
    </TabPanel>
  </Tabs>
);