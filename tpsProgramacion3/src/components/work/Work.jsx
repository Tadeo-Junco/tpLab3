import PropTypes from 'prop-types';
import { useState } from 'react';

const Work = ({ work, works, setWork }) => {
    const [check, setCheck] = useState(false);

    const handleCheck = () => {
        setCheck(!check);
    }

    const deleteWork = () => {
        const newList = works.filter(wor => wor !== work);
        setWork(newList);
    };

    

    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            padding: '10px', 
            backgroundColor: check ? 'green' : 'red'  
        }}>
            <input 
                type="checkbox"
                onChange={handleCheck}
            />
            <p>{work}</p>
            <button onClick={deleteWork}>Eliminar</button>
        </div>
    );
};

Work.propTypes = {
  works: PropTypes.string,
  setWork: PropTypes.func,
  work: PropTypes.string
};

export default Work;
