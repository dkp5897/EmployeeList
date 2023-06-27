import React, { useState } from "react";
import Inputs from "./components/Inputs";
import Table from "./components/Table";

import './App.css'

const App = () => {
  const [text, setText] = useState({
    name: "",
    email: "",
    age: "",
  });

  const [getList, setList] = useState([]);
  const [getEdit,setEdit] = useState(false);
  const [getIndex,setIndex] = useState(1)

  const onchangeHandler = (event) => {
    setText({ ...text, [event.target.name]: event.target.value });
  };

  const onsubmit = () => {
    setList([...getList,text]);
    setText({...text,age:"",email:"",name:""})
  };



  const onDelete = (index) =>{
    let temp = getList;
    temp.splice(index,1)
    setList([...temp])
  }

  const onEdit = (index) =>{
    setText({...text,
      name:getList[index].name,
      age:getList[index].age,
      email:getList[index].email
    })
    setEdit(true);
    setIndex(index)
  }

  const onEditSubmit = () =>{
    let temp = getList;
    temp[getIndex] = text
    setList([...temp])
    setText({
      name:'',
      age:'',
      email:''
    })
    setEdit(false)
  }

  console.log(getList);

  return (
    <div>
      <Inputs
        text={text}
        onchangeHandler={onchangeHandler}
        onsubmit={onsubmit}
        getEdit={getEdit}
        onEditSubmit={onEditSubmit}
      />
      {getList.length>0&&<Table getList={getList} onDelete={onDelete} onEdit={onEdit}/>}
    </div>
  );
};

export default App;
