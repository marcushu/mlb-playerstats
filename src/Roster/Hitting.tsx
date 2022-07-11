import { FunctionComponent } from "react";
import { HittingStatsType } from "../types";
import './details.css';

interface HittingProps {
  title: string
  stats: HittingStatsType | null
}

const Hitting: FunctionComponent<HittingProps> = ({ title, stats }) => {
  return (
    <div className="career-season">
      <div className="titles">{title}</div>
      <div className="detail-labels">
        <div>avg</div>
        <div>ab</div>
        <div>h</div>
        <div>r</div>
        <div>rbi</div>
      </div>
      <div className="detail-stats">
        <div>{stats?.avg ? stats.avg : '  -'}</div>
        <div>{stats?.ab}</div>
        <div>{stats?.h}</div>
        <div>{stats?.r}</div>
        <div>{stats?.rbi}</div>
      </div>
      <div className="detail-labels">
        <div>slg</div>
        <div>bb</div>
        <div>sb</div>
        <div>t</div>
        <div>tb</div>
      </div>
      <div className="detail-stats">
        <div>{stats?.slg ? stats.slg : '  -'}</div>
        <div>{stats?.bb}</div>
        <div>{stats?.sb}</div>
        <div>{stats?.t}</div>
        <div>{stats?.tb}</div>
      </div>
    </div>
  );
}

export default Hitting;