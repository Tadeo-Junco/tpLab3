import PropTypes from 'prop-types'
import Work from '../work/Work';


const WorkList = ({ works, setWork }) => {
    console.log(works)
    return (
    <div>
      {works.map((work, index) => (
        <p key={index}>
            <Work work={work} works={works} setWork={setWork}/>
        </p>
        ))}
    </div>
  )
}

WorkList.propTypes = {
    works: PropTypes.array,
    setWork: PropTypes.func
};

export default WorkList;
