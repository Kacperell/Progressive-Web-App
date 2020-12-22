import Header from './screens/GlobalComponents/Header';
import Home from './screens/Home/Home';
import FormWithDateSaving from './screens/FormWithDateSaving/FormWithDateSaving';
import Bst from './screens/BSTtime/Bst';
import Camera from './screens/Camera/Camera';
import GPS from './screens/GPS/GPS';
import Accelerometer from './screens/Accelerometer/Accelerometer';
import AudioRecorder from './screens/AudioRecorder/AudioRecorder';
import VideoYT from './screens/VideoYT/VideoYT';
import ListViewScreen from './screens/ListViewScreen/ListViewScreen';
import AnimationsScreen from './screens/AnimationsScreen/AnimationsScreen';
import ComponentsScreen from './screens/ComponentsScreen/ComponentsScreen';
import ModalScreen from './screens/ModalScreen/ModalScreen';
import AlertScreen from './screens/AlertScreen/AlertScreen';
import DataSharing from './screens/DataSharing/DataSharing';


const screens = [
    { path: '/FormWithDateSaving', titleInList: 'Formularz z zapisem do bazy', header: <Header backButton={1} title='Formularz z zapisem do bazy' />, component: <FormWithDateSaving /> },
    { path: '/Camera', titleInList: 'Dostęp do aparatu', header: <Header backButton={1} title='Dostęp do aparatu' />, component: <Camera /> },
    { path: '/Bst', titleInList: 'Binarne drzewo poszukiwań - Pomiar czasu', header: <Header backButton={1} title='Binarne drzewo poszukiwań - Pomiar czasu' />, component: <Bst /> },
    { path: '/GPS', titleInList: 'Lokalizacja', header: <Header backButton={1} title='Lokalizacja' />, component: <GPS /> },
    { path: '/Accelerometer', titleInList: 'Akcelerometr i żyroskop', header: <Header backButton={1} title='Akcelerometr i żyroskop' />, component: <Accelerometer /> },
    { path: '/VideoYT', titleInList: 'Obsługa multimediów', header: <Header backButton={1} title='Obsługa multimediów' />, component: <VideoYT /> },
    { path: '/ListViewScreen', titleInList: 'Dynamiczna lista', header: <Header backButton={1} title='Dynamiczna lista' />, component: <ListViewScreen /> },
    { path: '/AnimationsScreen', titleInList: 'Animacje', header: <Header backButton={1} title='Animacje' />, component: <AnimationsScreen /> },
    { path: '/ComponentsScreen', titleInList: 'Komponenty', header: <Header backButton={1} title='Komponenty' />, component: <ComponentsScreen /> },
    { path: '/ModalScreen', titleInList: 'Modal', header: <Header backButton={1} title='Modal' />, component: <ModalScreen /> },
    { path: '/AlertScreen', titleInList: 'Alert', header: <Header backButton={1} title='Alert' />, component: <AlertScreen /> },
    { path: '/DataSharing', titleInList: 'Współdzielenie danych', header: <Header backButton={1} title='Współdzielenie danych' />, component: <DataSharing /> },
    // { path: '/', titleInList: 'Home', header: <Header backButton={0} title='Home' />, component: <Home /> }
];

export default screens

