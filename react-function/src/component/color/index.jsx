import React,{useState} from 'react';
import './Colorbox.css';

ColorBox.propTypes = {
    
};
function getRamdomColor() {
    var arr  = ['blue','yellow','white','green','red','deeppink'];
    const index = Math.trunc(Math.random()*6);
    return arr[index];
}
function ColorBox(props) {
    const [color, setColor] = useState(()=>{
        const initColor = localStorage.getItem('box-color') || 'red';
        return initColor;
    });
    function handleBoxClick() {
        const color_ramdom = getRamdomColor();
        console.log(color_ramdom);
        setColor(color_ramdom);
        localStorage.setItem('box-color',color_ramdom);
    }
    return (
        <div
        className='color-box'
        style ={{backgroundColor : color}}
        onClick={handleBoxClick}
        >
            
        </div>
    );
}

export default ColorBox;