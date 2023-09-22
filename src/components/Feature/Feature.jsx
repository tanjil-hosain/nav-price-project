import PropTypes from 'prop-types';
import { AiTwotoneStar } from "react-icons/ai";

const Feature = ({feature}) => {
    return (
        <p className='flex '><AiTwotoneStar className='text-cyan-400'></AiTwotoneStar>{feature}</p>
    );
};
Feature.propTypes={
    feature:PropTypes.object
}

export default Feature;