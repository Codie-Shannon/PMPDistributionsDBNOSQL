// Functions
function TextblockLink({lh, lnk, lnktxt, h1, p1})
{
    return (
        <div className="textblock">
            <div className="tb-item l-item">
                <h3>{lh}:</h3>
                <p><a href={lnk}>{lnktxt}</a></p>
            </div>
            <div className="tb-item r-item">
                <h3>{h1}:</h3>
                <p>{p1}</p>
            </div>
        </div>
    );
}

// Export TextblockLink
export default TextblockLink;