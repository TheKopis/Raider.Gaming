

export default function Leaderboard({ users = []}) {

    // const tmpU = [...users];
    // tmpU.sort((a, b) => a.score > b.score)
    // setUsers(tmpU)

    const mapUsers = () => {
        if(users.length === 0) return <></>
        let leaderboard = [...users];
        leaderboard = leaderboard.sort((a, b) => b.mythic_scores - a.mythic_scores)
        .map( (e, index) => {
            return(
                <div className="leaderboard-entry" key={index}>
                    <span>{e.name}</span>
                    <span>{e.class}</span>
                    <span>{e.active_spec_name}</span>
                    <span>{e.mythic_scores}</span>
                </div>
            )
        })

        return leaderboard;
    }

    return (
      <div className="container">
        <div className="leaderboard">
          <h1>Cash Inc Leaderboard</h1>
          <div className="leaderboard-header">
            <span>Name</span>
            <span>Class</span>
            <span>Specialization</span>
            <span>Current Mythic+ Rating</span>
          </div>
          {mapUsers()}
        </div>
      </div>
    );
  }
  