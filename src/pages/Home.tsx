import type { FC } from 'react';
import Header from '../components/Header';
import Products from '../components/Products';
import Finds from '../components/Finds';
import Gears from '../components/Gears';
import Footer from '../components/Footer';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
        return (
            <main>
              <Header/>
              <Products/>
              <Finds/>
              <Gears/>
              <Footer/>
            </main>
        );
}
export default Home;