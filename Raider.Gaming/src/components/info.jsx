// import {useState} from 'react'
// import '../style/info.css'
// /**
//  * simple react component that gets character name and realm from input fields and stores in state
//  * @function getPlayerInfo
//  * @returns {React.JSX.Element}
//  */
// export function Info(){
//     const [name, setName] = useState(undefined)
//     const [realm, setRealm] = useState(undefined)
//     const getData = () => {
//         const data = {
//             charname: name,
//             realm: realm
//         }

//         console.log(data)
//         return data // send this data to server
//     }

//     return(
//         <div className='info-field'>
//             <input className='name-field' id='charname' onChange={(e)=>{setName(e.target.value)}}/>
//             <input className='realm-field' id='realm' onChange={(e)=>{setRealm(e.target.value)}}/>
//             <button className='submit-button' id='submit' onClick={getData}>submit</button>
//         </div>
//     )
// }