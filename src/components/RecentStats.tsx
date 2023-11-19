import IonIcon from '@reacticons/ionicons';
import { useAppDispatch, useAppSelector } from '../hooks/useReduxHooks';
import {
  RecentStat,
  removeAllStats,
  resetStats
} from '../store/slices/statsSlice';
import { Button, ListGroup, Card, Dropdown } from 'react-bootstrap';
import { setText, TextMode } from '../store/slices/textSlice';
import { setUrl } from '../store/slices/routingSlice';
import { useState } from 'react';

interface Props {
  recentStats: RecentStat[];
}

export const RecentStats = ({ recentStats }: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const mode: TextMode = useAppSelector((state) => state.text.mode);
  const [filteredRecentStats, setFilteredRecentStats ] = useState<RecentStat[]>([]);

  const updateText = () => {
    dispatch(resetStats());
    dispatch(setText(mode));
    dispatch(setUrl('/'));
  };

  const filterBy = {
      sortAccLowToHigh: () => {
        setFilteredRecentStats([...recentStats].sort((a: RecentStat, b: RecentStat) => Number(a.acc) - Number(b.acc)));
      },
      sortAccHighToLow: () => {
        setFilteredRecentStats([...recentStats].sort((a: RecentStat, b: RecentStat) => Number(b.acc) - Number(a.acc)));
      },
      sortWpmLowToHigh: () => {
        setFilteredRecentStats([...recentStats].sort((a: RecentStat, b: RecentStat) => Number(a.wpm) - Number(b.wpm)));
      },
      sortWpmHighToLow: () => {
        setFilteredRecentStats([...recentStats].sort((a: RecentStat, b: RecentStat) => Number(b.wpm) - Number(a.wpm)));
      }
  }

  const renderStats = (arr: RecentStat[]) => {
    return arr.map((stat, index) => (
            <Card
              key={index}
              style={{
                width: '18rem',
                margin: '1rem 1rem auto auto',
                float: 'left',
              }}
              className={index === 0 ? 'most-recent-stat' : ''}
            >
              <Card.Header>
                <p>{stat?.timeDateStamp}</p>
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <span className="mode">{stat?.mode}</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <span>Duration:</span>
                  <span className="duration">{stat?.duration}</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <span>WPM:</span>
                  <span className="wpm">{stat?.wpm}</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <span>ACC:</span>
                  <span className="acc">{stat?.acc}%</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <span>Error Rate:</span>
                  <span className="error-rate">{stat?.errorRate}%</span>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          ))
  }

  return (
    <>
      <div className="statsContainer">
        <Button variant="flush" onClick={() => updateText()}>
          <div className="ionIcon">
            <IonIcon
              title="New Round"
              name="arrow-back-circle-outline"
              size="large"
              data-testid="new-text-reset"
            />
            <p>New Round</p>
          </div>
        </Button>
        {recentStats?.length ? (
          <>
          <Button variant="dropdown" onClick={() => { if(window.confirm("Clear all Stats")) {
            dispatch(removeAllStats())
          }}}>
            <div className="clear">
              <IonIcon
                name="close-circle-outline"
                size="large"
                data-testid="reset"
              />
              <p>Clear All Rounds</p>
            </div>
          </Button>
           <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{margin: '20px'}}>
              Sort By
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => filterBy.sortAccLowToHigh()}>Accurracy (Lowest to Hightest)</Dropdown.Item>
              <Dropdown.Item onClick={() => filterBy.sortAccHighToLow()}>Accurracy(Highest to lowest)</Dropdown.Item>
              <Dropdown.Item onClick={() => filterBy.sortWpmLowToHigh()}>WPM(Lowest to Highest)</Dropdown.Item>
              <Dropdown.Item onClick={() => filterBy.sortWpmHighToLow()}>WPM(Highest to lowest)</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </>) : ""}
      </div>
      <div>
      
       </div>
      <div className="statsContainer" style={{ marginLeft: '1rem' }}>
       
        {filteredRecentStats?.length ? renderStats(filteredRecentStats) : renderStats(recentStats)}
      </div>
    </>
  );
};
