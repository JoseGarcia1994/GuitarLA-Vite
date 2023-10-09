import '../styles/guitar.css';
import GuitarList from '../components/GuitarList';
import Loader from '../components/Loader';

const Store = ({ guitars }) => {
    return (
        <>
            {guitars && guitars.length ? (
                <>
                    <main className='container'>
                        <GuitarList
                            guitars={guitars}
                        />
                    </main>
                </>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default Store;