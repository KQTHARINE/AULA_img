
const  NotCompo = ({titulo, img, alt, desc, catego }) => {
    return (
        <div className='not'>
            <img src={img} alt={alt} className='notimg' /> 
            <h2 className='nottitulo'> {titulo} </h2>
            <p className='notdesc'> {desc} </p>
            <p className='notcatego'> {catego} </p>
        </div> 
    );
};

export default NotCompo;