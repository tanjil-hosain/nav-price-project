import PropTypes from 'prop-types';
import Feature from '../../Feature/Feature';
const Priceoption = ({priceoption}) => {
    const {price ,name ,features}= priceoption;
    return (
        <div className='bg-green-500 m-10 rounded-lg p-5 font-semibold text-white flex flex-col'>
            <h2>
            <span className='text-6xl'>{price}</span>
            <span className='text-2xl'>/mon</span>
            </h2>
            <h3 className='text-3xl'>{name}</h3>
            <div className='p-5 flex-grow'>
            {
                features.map((feature , idx )=><Feature key={idx} feature={feature}></Feature>)
                }
            </div>
            <div className="">
                <button className=' mt-2 p-2 w-full bg-blue-600 hover:bg-blue-800'>Buy now</button>
            </div>
        </div>
       
    );
};
Priceoption.propTypes={
    priceoption:PropTypes.object
    
}

export default Priceoption;