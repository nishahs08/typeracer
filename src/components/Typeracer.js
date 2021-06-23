import Button from "./Button"
import '../styles/typeracer.css'
const Typeracer = (props) => {
    const {
        newWord,
        inputValue,
        setInputValue,
        disabled,
        time,
        animation,
        handleStart,
        handleInput
    } = props;
    return (
        <div className="typeracer">
            <div className="word-output">
                <p>{newWord}</p>
            </div>
            <div
                style={{ animation: 0 ? animation : "" }}
                className="time">
                <p>{time}</p>
            </div>
            <div className="word-values">
                <input
                    type="text"
                    disabled={disabled}
                    onKeyPress={e => handleInput(e)}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={disabled ? "" : "Start typing..............."}
                    />
                <Button handleStart={handleStart} disabled={disabled}/>
            </div>
        </div>
    )
}

export default Typeracer;