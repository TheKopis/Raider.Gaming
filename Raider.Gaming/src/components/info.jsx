import {useState} from 'react'

export default function Info({users, setUsers}){
    const [charName, setCharName] = useState(undefined)
    const [realm, setRealm] = useState(undefined)
    const getData = async () => {
        const response = await fetch(`http://localhost:8080?realm=${realm}&charname=${charName}`, {
          method: 'GET',
        })
        const data = await response.json()
        const {name, active_spec_name, mythic_plus_scores_by_season} = data;
        const c = data.class;
       setUsers([...users, {"name": name, "class": c,  "active_spec_name": active_spec_name, "mythic_scores": mythic_plus_scores_by_season[0].scores.all}]);
    }
    return(
        <div className='info-field'>
            <input className='name-field' id='charname' placeholder="name" onChange={(e)=>{setCharName(e.target.value)}}/>
            <input className='realm-field' id='realm' placeholder="realm" onChange={(e)=>{setRealm(e.target.value)}}/>
            <button className='submit-button' id='submit' onClick={getData}>submit</button>
        </div>
    )
}
