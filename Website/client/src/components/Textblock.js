// Functions
function Textblock({h1, p1, h2, p2})
{
    return (
        <div className="textblock">
            <div className="tb-item l-item">
                <h3>{h1}:</h3>
                <p>{p1}</p>
            </div>
            <div className="tb-item r-item">
                <h3>{h2}:</h3>
                <p>{p2}</p>
            </div>
        </div>
    );
}

// Export Textblock
export default Textblock;