import Header from './screens/GlobalComponents/Header';
import Home from './screens/Home/Home';
import FormWithDateSaving from './screens/FormWithDateSaving/FormWithDateSaving';
// import { FALSE, TRUE } from 'node-sass';

const screens = [
    { path: '/FormWithDateSaving', titleInList: 'Formularz z zapisem do bazy', header: <Header backButton={1} title='Formularz z zapisem do bazy' />, component: <FormWithDateSaving /> },
    { path: '/FormWithDateSaving', titleInList: 'Formularz z zapisem do bazy', header: <Header backButton={1} title='Formularz z zapisem do bazy' />, component: <FormWithDateSaving /> },
    // { path: '/', titleInList: 'Home', header: <Header backButton={0} title='Home' />, component: <Home /> }
];

export default screens

