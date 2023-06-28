import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import token from "../../../../token-apiurl/token";

const framework = [
    {
    label: 'React',
    value:'1'
  },{
    label: 'Angular',
    value:'2'
  }
]

const Editcheckbox = () => {
  const apiFramework = "https://portfolio.blackphoenix.digital/getFramework";
  const [editFramework, setEditFramework] = useState([]);

  const [checkState, setCheckState] = useState(
    new Array(editFramework.length).fill(false) 
  );

  
  const handleChange = (e) => {
    const updateCheckState = checkState.map((item, index) => 
        index === e ? !item : item
         
    );

    setCheckState(updateCheckState);

    const checkState = updateCheckState.reduce(
          (item, index) => {
            if (framework[0].framework_name ===  item.framework_name) {
                return true;
            } 
            else  {
                return false; 
            }
        }
    )

  };


  //GET Framework
  useEffect(() => {
    const headers = { Authorization: `Bearer ${token}` };
    fetch(apiFramework, { headers })
      .then((response) => response.json())
      .then((data) => setEditFramework(data));
  }, []);

  // console.log("edit Framework:", editFramework);

  return (
    <div>
      
        {editFramework.map((item, index) => {
         return (
            <div className="checkboxFramework">
                 <input
                type="checkbox"
                id={item.framework_id}
                value={item.framework_id}
                name={item.framework_name}
                checked={checkState[index]}
                onChange={()=>handleChange(index)}
              />
            <label>{item.framework_name}</label>
            </div>
            
         );
        })}
      </div>
  );
};
export default Editcheckbox;



