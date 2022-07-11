import React, { useEffect, useState } from 'react';
import Roster from './Roster';
import TitleTop from './TitleTop';
import { teams } from './data/teamIds';
import { PlayerType } from './types';
import githubImg from './images/GitHub-Mark-Light-32px.png';

function App() {
  const [currentTeamId, setCurrentTeamId] = useState<string>(teams[0].team_id);
  const [teamRoster, setteamRoster] = useState<PlayerType[] | null>(null);

  useEffect(() => {
    const APIURL = process.env.REACT_APP_BBALL_API;

    fetch(`${APIURL}/named.roster_40.bam?team_id=%27${currentTeamId}%27`)
      .then(res => {
        res.json().then(dta => {
          setteamRoster(dta.roster_40.queryResults.row);
        })
      });

  }, [currentTeamId]);

  return (
    <div>
      <TitleTop teams={teams} setTeam={setCurrentTeamId} />
      <div style={{ maxWidth: '1200px', margin: 'auto' }}>
        <Roster teamRoster={teamRoster} />
      </div>
      <div style={{ padding: '10px', backgroundColor: '#212121', marginTop: '45px', textAlign: 'end'}}>
        <img src={githubImg} alt="github" />
      </div>
    </div>
  );
}

export default App;
