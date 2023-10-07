import image from '../../public/img/nosotros.jpg';

const About = () => {
    return (
        <main className="container about">
            <h2 className="heading">About us</h2>
            <div className="content">
                <img src={image} alt="image" />
                <div>
                    <p>
                    Suspendisse ac sodales nulla. Proin molestie erat sit amet erat tincidunt, eu porta magna sollicitudin. Quisque metus nibh, venenatis eu nisl id, efficitur scelerisque tortor. Maecenas imperdiet, est ut auctor egestas, augue ante ullamcorper magna, ut ullamcorper orci nibh vitae ligula. Duis blandit lobortis odio, quis lacinia leo feugiat ut. Ut non consectetur mauris. Integer id eros ligula.
                    </p>

                    <p>
                    Suspendisse ac sodales nulla. Proin molestie erat sit amet erat tincidunt, eu porta magna sollicitudin. Quisque metus nibh, venenatis eu nisl id, efficitur scelerisque tortor. Maecenas imperdiet, est ut auctor egestas, augue ante ullamcorper magna, ut ullamcorper orci nibh vitae ligula. Duis blandit lobortis odio, quis lacinia leo feugiat ut. Ut non consectetur mauris. Integer id eros ligula.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default About;