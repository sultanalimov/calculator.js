const ControlButton = (props) => {
   
    const {index,value,handleClick} = props;

    return (
        <div className={`card${index}`} onClick={() => handleClick(value)}>
                {}
                {value !== '*' ? value : 'x'}
        </div>
    );
}

export default ControlButton;