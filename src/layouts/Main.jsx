import Footer from '../components/Footer/Footer';
import HeaderNav from '../components/HeaderNav/HeaderNav';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <HeaderNav></HeaderNav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;