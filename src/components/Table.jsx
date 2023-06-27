import React from 'react'

const Table = (props) => {
    const {getList,onDelete,onEdit} = props
  return (
    <div>
    <h1 >Employees List</h1>
      <table>
       <thead>
       <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
       </thead>
       <tbody>
        {getList.map((item,index) =>{
            return(
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.age}</td>
                    <td><button onClick={()=>onEdit(index)}>Edit</button></td>
                    <td><button onClick={()=>onDelete(index)}>Delete</button></td>
                </tr>
            )
        })}
       </tbody>
      </table>
    </div>
  )
}

export default Table
