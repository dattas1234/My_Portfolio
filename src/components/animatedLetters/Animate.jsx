import './Animate.scss';

const Animate=({letterClass,strArray,idx})=>{
    // console.log(letterClass);
    return(
        <span>
            {
                strArray.map((char,i)=>(
                    <span key={char+i} className={`${letterClass} _${i+idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>

    )
};

export default Animate;