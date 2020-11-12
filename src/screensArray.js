import Header from './screens/GlobalComponents/Header';
import Home from './screens/Home/Home';
import FormWithDateSaving from './screens/FormWithDateSaving/FormWithDateSaving';
import Bst from './screens/BSTtime/Bst';
import Camera from './screens/Camera/Camera';
import GPS from './screens/GPS/GPS';
import Accelerometer from './screens/Accelerometer/Accelerometer';
// import { FALSE, TRUE } from 'node-sass';

const screens = [
    { path: '/FormWithDateSaving', titleInList: 'Formularz z zapisem do bazy', header: <Header backButton={1} title='Formularz z zapisem do bazy' />, component: <FormWithDateSaving /> },
    { path: '/Camera', titleInList: 'Dostęp do aparatu', header: <Header backButton={1} title='Dostęp do aparatu' />, component: <Camera /> },
    { path: '/Bst', titleInList: 'Binarne drzewo poszukiwań - Pomiar czasu', header: <Header backButton={1} title='Binarne drzewo poszukiwań - Pomiar czasu' />, component: <Bst /> },
    { path: '/GPS', titleInList: 'Lokalizacja', header: <Header backButton={1} title='Lokalizacja' />, component: <GPS /> },
    { path: '/Accelerometer', titleInList: 'Accelerometer', header: <Header backButton={1} title='Accelerometer' />, component: <Accelerometer /> },
    // { path: '/', titleInList: 'Home', header: <Header backButton={0} title='Home' />, component: <Home /> }
];

export default screens

