import PropTypes from 'prop-types';
import { useState } from 'react';

const NewWork = ({ works , setWork }) => {
    const [newWork, setNewWork] = useState("");

    const handledNewWork = (e) => {
        setNewWork(e.target.value);
    };
    
    const submit = () => {
        if (works.includes(newWork)){
            alert("Esta Tarea ya Existe!");
        }
        else {
        
            if (newWork != ""){
                setWork([...works, newWork]);
                setNewWork("");
            }
            else{
                alert("Debe ingresar una tarea");
            }
        }
        
        
    }
    

  return (
    <div>
      <input 
        type="text" 
        value={newWork}
        onChange={handledNewWork}
        placeholder='Nueva Tarea ...'
        />

      <button onClick={submit}>Añadir Tarea</button>
    </div>
  )
}

NewWork.propTypes = {
    works: PropTypes.array,
    setWork: PropTypes.func,
}

export default NewWork
