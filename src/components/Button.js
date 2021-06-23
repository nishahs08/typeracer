import '../styles/button.css';
const Button = ({ disabled, handleStart }) => {
    return <button onClick={handleStart}>{disabled ? 'Start' :'Restart'}</button>
}
export default Button;