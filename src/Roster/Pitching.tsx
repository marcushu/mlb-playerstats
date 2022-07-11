import { FunctionComponent } from "react";
import { PitchingStatsType } from "../types";

interface PitchingProps {
  stats: PitchingStatsType | null
  title: string
}

const Pitching: FunctionComponent<PitchingProps> = ({ stats, title}) => {
  return (
    <div className="career-season">
      <div className="titles">{title}</div>
      <div className="detail-labels">
        <div>era</div>
        <div>np</div>
        <div>avg</div>
        <div>r</div>
        <div>so</div>
      </div>
      <div className="detail-stats">
        <div>{stats?.era ? stats.era : '-'}</div>
        <div>{stats?.np}</div>
        <div>{stats?.avg}</div>
        <div>{stats?.r}</div>
        <div>{stats?.so}</div>
      </div>
      <div className="detail-labels">
        <div>h</div>
        <div>hr9</div>
        <div>ip</div>
        <div>w</div>
        <div>gs</div>
      </div>
      <div className="detail-stats">
        <div>{stats?.h ? stats.h : '-'}</div>
        <div>{stats?.hr9}</div>
        <div>{stats?.ip}</div>
        <div>{stats?.w}</div>
        <div>{stats?.gs}</div>
      </div>
    </div>
  );
}

export default Pitching;