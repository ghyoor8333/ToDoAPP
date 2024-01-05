import React, { useState } from 'react'

export default function TodoList() {
    const [activity,setActivity]=useState("")
    const [listData,setlistData]=useState([])
    function addActivity(){
            // setlistData([...listData,activity])
            // console.log(listData);
            setlistData((listData)=>{
                const updateList=[...listData,activity]
                // console.log(updateList);
                setActivity('')
                return updateList
            })
    }
    function removeActivity(i){
         const updatedListData=listData.filter((elem,id)=>{
            return i!=id;
         })
         setlistData(updatedListData)
    }
    const updateItems=(i)=>{
        const newValue=[...listData].map((newVal)=>{
          if(activity.id===i){
            activity.text='';
          }
          return newVal;
        })
        setlistData(newValue);
       
     }
   
    function removeAll(){
        setlistData([])
    }
  return (
    <>
    <div className='container'>
          <div className='header'>TODO LIST</div>
          <input type='text' placeholder='Add activity' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
          <button onClick={addActivity}>ADD</button>
        <p className='List-heading'>Here is your list</p>
         {listData!=[] && listData.map((data,i)=>{
            return(
                <>
                    <h1 key={i}>
                        <div className='listData'>{data}</div>
                        <div className='btn-position'><button onClick={()=>removeActivity(i)} >DELETE</button></div>
                        <div className='btn-position_Update'><button onClick={()=>updateItems(i)} >Update</button></div>
                    </h1>
                </>
            )
         })}
         {listData.length>=1 && 
         <button onClick={removeAll}>Remove All</button>}
    </div>
    </>
  )
}
