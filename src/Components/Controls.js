import { useState } from 'react';

import styles from '../Styles/controls.module.css';

import ControlButton from './ControlButton';


const operators = ['AC','C','%','/',
                    '7','8','9','*',
                    '4','5','6','-',
                    '1','2','3','+',
                    '0','.','='];


const Controls = (props) => {

    const {input, output, setInput, setOutput} = props;
 
    const [isSymbolClick , setIsSymbolClick] = useState(false);

    const [isEqualClick,setIsEqualClick]= useState(false);

    const handleClick = (value) => {

        switch(value){

            case 'AC':
                setInput('0');
                setOutput(0);
                setIsEqualClick(false);
                setIsSymbolClick(false);
                break;
            

            case 'C':
                if(input.length === 1){
                    setInput('0')
                    setOutput(0);
                    setIsEqualClick(false);
                    setIsSymbolClick(false);
                    break;
                }
                setInput(input.slice(0,input.length-1));
                break;
            


            case '%':
               
                var answer;
                
                if(isSymbolClick){
                    const newInput = input.slice(0,input.length-1);
                    answer = eval(`${newInput} / 100`);
                }
                else{
                    answer = eval(`${input} / 100`);
                }
                
                setInput(answer.toString());
                
                setOutput(answer);
                
                setIsSymbolClick(false);
                break;
            

                
            case '=':
                if(isSymbolClick){
                    window.alert('Please Enter Correct value');
                    break;
                }

                var result = eval(input);

                result = Math.round(result * 100) / 100;


                var stringResult =result.toString();
                if(stringResult.length > 15){
                    result=(result).toExponential(2);
                }

              
                setOutput(result);
               
                setIsEqualClick(true);
                break;

            case '/':
                
                if( input === '0'){
                    setIsSymbolClick(true);
                    setInput( input + value);
                    break;
                }

                if(isSymbolClick){
                    const newInput = input.slice(0,input.length-1)
                    setInput(newInput + value);
                    break;
                }
                
                setIsSymbolClick(true);


            
          
            case '*':
        
                if( input === '0'){
               
                    setIsSymbolClick(true);
                    setInput( input + value);
                    break;
                }
              
                if(isSymbolClick){
                    const newInput = input.slice(0,input.length-1)
                    setInput(newInput + value);
                    break;
                }
             
                setIsSymbolClick(true);


   
            case '+':
      
                if( input === '0'){
                   
                    setIsSymbolClick(true);
                    setInput( input + value);
                    break;
                }
             
                if(isSymbolClick){
                    const newInput = input.slice(0,input.length-1)
                    setInput(newInput + value);
                    break;
                }
               
                setIsSymbolClick(true);


    
            case '-':
               
                if( input === '0'){
                    setIsSymbolClick(true);
                    setInput( input + value);
                    break;
                }
            
                if(isSymbolClick){
                    const newInput = input.slice(0,input.length-1)
                    setInput(newInput + value);
                    break;
                }
                setIsSymbolClick(true);


            default:
                if(input === '0'){
                
                    setInput(value.toString());
                    break;
                }

                if(isEqualClick){
                    setInput( output.toString() + value);
                    setIsEqualClick(false);
                }
                else{
                
                    setInput(input + value);    
                }
                

                if(isSymbolClick){
                    
                    setIsSymbolClick(false);
                }
                break;
        }
    }

    return(
        <div className={styles.controlContainer}>

            {}
            {}
            {}
            {operators.map((value,i) => <ControlButton key={i}
                                                        index={i}
                                                        value={value}
                                                        handleClick={handleClick} />)}
        </div>
    );
}

export default Controls;