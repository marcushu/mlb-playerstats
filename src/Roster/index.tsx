import React, { FunctionComponent, useState } from "react";
import { PlayerType } from "../types";
import Details from "./Details";
import './index.css';

interface RosterProps {
  teamRoster: PlayerType[] | null
}

const Roster: FunctionComponent<RosterProps> = ({ teamRoster }) => {
  const [selectedPlayer, setSelectedPlayer] = useState<PlayerType | null>(null);

  return (
    <table id="player-table">
      <thead>
        <tr>
          <th></th>
          <th><span>Position</span></th>
          <th><span>height</span></th>
          <th><span>Weight</span></th>
          <th className="debut"><span>Debut</span></th>
        </tr>
      </thead>
      <tbody>
        {teamRoster?.map(player =>
          <React.Fragment key={player.player_id}>
            <tr
              className={selectedPlayer?.player_id !== player.player_id ? "player-row" : 'selected-player-row'}
              onClick={() => setSelectedPlayer(player)}>
              <td>
                <span style={{ fontWeight: 'bold' }}>{player.name_full}</span>
                <span className="jersey-number">{player.jersey_number}</span>
              </td>
              <td>{player.position_txt}</td>
              <td>{player.height_feet}' {player.height_inches}</td>
              <td>{player.weight}</td>
              <td className="debut">{new Date(player.pro_debut_date).getFullYear().toString()}</td>
            </tr>
            {selectedPlayer?.player_id === player.player_id &&
              <tr>
                <td colSpan={5} className='detail-row'>
                  <Details playerId={player.player_id} />
                </td>
              </tr>}
          </React.Fragment>
        )}
      </tbody>
    </table>
  );
}

export default Roster;