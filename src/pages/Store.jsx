import GuitarList from '../components/GuitarList';
import '../styles/guitar.css';

const Store = ({guitars}) => {
    return (
        <main className='container'>
            <GuitarList 
            guitars={guitars}
            />
        </main>
    );
};

export default Store;