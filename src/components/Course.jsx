
const Course = ({course}) => {
    return (
        <section className="course">
            <style jsx="true">{`
                .course {
                    background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7) ), url(${course?.image.data.attributes.url})
                }
            `}</style>
            <div className="container course-grid">
                <div className="content">
                    <h2 className="heading">{course?.title}</h2>
                    <p className="text">{course?.content}</p>
                </div>
            </div>

        </section>
    );
};

export default Course;