import "./Content.css";

const Content = () => {
    return (
        <div className="content-container">
            <div>
                <button>Add</button>
                <button>Subtract</button>
                <button>Multiply</button>
                <button>Division</button>
            </div>
            <div className="input-container">
                <input /> ? <input />=
            </div>
            <div>
                <button className="calculate-button">Calculate</button>
            </div>
        </div>
    );
}

export default Content;
