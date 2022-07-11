import { FunctionComponent } from "react";
import bgImage from '../images/baseballGrass.png';
import './index.css'
import { TeamTypes } from "../types";

interface TitleTopProps {
  teams: TeamTypes[]
  setTeam: React.Dispatch<React.SetStateAction<string>>
}

const TitleTop: FunctionComponent<TitleTopProps> = ({ teams, setTeam }) => {
  
  return (
    <div id="imagebox" style={{ backgroundImage: `url(${bgImage})` }}>
      <div id="disclaimer">Not affiliated with Major League Baseball</div>
      <div id='title'>
        <div id="textbox">
          <div id="mlb">
            M.L.B.
          </div>
          <div id="player">
            &nbsp;player
          </div>
          <div id="stats">
            stats
          </div>
        </div>
      </div>
      <div id="selectbox">
        <select name="teams" id="teams" onChange={(e) => setTeam(e.target.value)}>
          {teams.map(team => <option value={team.team_id} key={team.team_id}>{team.team}</option>)}
        </select>
      </div>
    </div>
  );
}

export default TitleTop;