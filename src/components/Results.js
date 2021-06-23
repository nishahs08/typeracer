import '../styles/results.css'
const Results = ({ correctResults, wrongResults, countCorrect }) => {
    return (
        <div className="results">
            <div className="results-title">
                <p>Correct Answers:{countCorrect}</p>
            </div>
            <div className="results-container">
                <div className="results-correct">
                    <div className='results-caption'>
                        <p>Correct words</p>
                    </div>
                    {
                        correctResults.map((word, index) => (
                            <div className='results-row' key={index}>
                                <p>{word}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="results-wrong">
                    <div className='results-caption'>
                        <p>Wrong Words</p>
                    </div>
                    {
                        wrongResults.map((word, index) => (
                            <div className='results-row' key={index}>
                                <p>{word}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Results;