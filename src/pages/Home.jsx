import GuitarList from "../components/GuitarList";
import PostList from "../components/PostList";
import Course from "../components/Course";
import Loader from '../components/Loader';
import '../styles/course.css';

const Home = ({ posts, guitars, course }) => {
    return (
        <>
            {guitars && guitars.length ? (
                <>
                    <main className='container'>
                        <GuitarList
                            guitars={guitars}
                        />
                    </main>

                    <Course
                        course={course.attributes}
                    />

                    <section className="container">
                        <PostList
                            posts={posts}
                        />
                    </section>
                </>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default Home;