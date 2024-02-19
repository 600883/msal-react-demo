import { BorderColor } from '@mui/icons-material';
import MyLoader from "./Loader";
import './CustomButton.css';

function CustomButton({startLoader, stopLoader }) {
    
    return (
        <div className='buttonContainer'>
            <button className='button1' onClick={startLoader}>I am a button</button>
            <button className='button2'>I am a button2</button>
            <button className='button3'>I am a button3</button>
            <button className='button4'>I am a button4</button>
        </div>
    );
} 
export default CustomButton;