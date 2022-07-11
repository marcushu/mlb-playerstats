import { FunctionComponent, useEffect, useState } from "react";
import { HittingStatsType, PitchingStatsType } from "../types";
import Hitting from "./Hitting";
import Pitching from "./Pitching";

interface DetailsProps {
  playerId: string
}

const Details: FunctionComponent<DetailsProps> = ({ playerId }) => {
  const [careerHitting, setCareerHitting] = useState<HittingStatsType | null>(null);
  const [seasonHitting, setSeasonHitting] = useState<HittingStatsType | null>(null);
  const [careerPitching, setcareerPitching] = useState<PitchingStatsType | null>(null);
  const [seasonPitching, setseasonPitching] = useState<PitchingStatsType | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const APIURL = process.env.REACT_APP_BBALL_API;
    
    const fetchAll = async () => {
      try {
        setLoading(true);

        const responses = await Promise.all([
          fetch(`${APIURL}/named.sport_career_hitting.bam?league_list_id=%27mlb%27&game_type=%27R%27&player_id=%27${playerId}%27`),
          fetch(`${APIURL}/named.sport_hitting_tm.bam?league_list_id=%27mlb%27&game_type=%27R%27&season=%272017%27&player_id=%27${playerId}%27`),
          fetch(`${APIURL}/named.sport_career_pitching.bam?league_list_id=%27mlb%27&game_type=%27R%27&player_id=%27${playerId}%27`),
          fetch(`${APIURL}/named.sport_pitching_tm.bam?league_list_id=%27mlb%27&game_type=%27R%27&season=%272017%27&player_id=%27${playerId}%27`)
        ]);

        const [cHitting, sHitting, cPitching, sPitching] = await Promise.all(responses.map(pr => pr.json()));

        setCareerHitting(cHitting.sport_career_hitting.queryResults.row);
        setSeasonHitting(sHitting.sport_hitting_tm.queryResults.row);
        setcareerPitching(cPitching.sport_career_pitching.queryResults.row);
        setseasonPitching(sPitching.sport_pitching_tm.queryResults.row);

      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchAll();
  }, [playerId]);

  return (
    <>
      {careerHitting &&
        <div className="detail-box">
          <Hitting title="Career Hitting" stats={careerHitting} />
          <Hitting title="Season Hitting" stats={seasonHitting} />
        </div>}
      {careerPitching &&
        <div className="detail-box">
          <Pitching title="Career Pitching" stats={careerPitching} />
          <Pitching title="Season Pitching" stats={seasonPitching} />
        </div>}
      {loading &&
        <span style={{ color: 'gray', fontWeight: 'bold', fontStyle: 'italic' }}> LOADING...</span>}
      {!careerHitting && !careerPitching && !loading &&
        <span style={{ color: 'red', paddingLeft: '20px' }}>Unavailable &#9785;</span>}
    </>
  );
}

export default Details;