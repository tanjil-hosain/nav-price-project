import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className='mr-10 ml-15'><a href={route.path}></a>{route.name}</li>
    );
};
Link.propTypes={
    route:PropTypes.object

}
export default Link;