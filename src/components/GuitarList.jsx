import Guitar from "./Guitar";

const GuitarList = ({guitars}) => {
    return (
        <div>
            <h2 className='heading'>Our Collection</h2>
            {guitars.length && (
                <div className='guitars-grid'>
                    {guitars.map( guitar => (
                        <Guitar 
                        key={guitar.id}
                        guitar={guitar}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default GuitarList;