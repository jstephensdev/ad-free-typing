import IonIcon from '@reacticons/ionicons';
import { useAppDispatch, useAppSelector } from '../hooks/useReduxHooks';
import {
  RecentStat,
  removeAllStats,
  resetStats,
} from '../store/slices/statsSlice';
import { Button, ListGroup, Card, Dropdown } from 'react-bootstrap';
import { setText, TextMode } from '../store/slices/textSlice';
import { setUrl } from '../store/slices/routingSlice';
import { useEffect, useState } from 'react';

interface Props {
  recentStats: RecentStat[];
}

export const RecentStats = ({ recentStats }: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const mode: TextMode = useAppSelector((state) => state.text.mode);
  const [stats, setStats] = useState<RecentStat[]>([]);
  useEffect(() => {
    setStats(recentStats);
  }, [recentStats]);
  const [activeItem, setActiveItem] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = stats.slice(startIndex, endIndex);
  const totalPages = Math.ceil(stats.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const updateText = () => {
    dispatch(resetStats());
    dispatch(setText(mode));
    dispatch(setUrl('/'));
  };

  const filterBy = {
    sortAccLowToHigh: () => {
      setStats(
        [...recentStats].sort(
          (a: RecentStat, b: RecentStat) => Number(a.acc) - Number(b.acc)
        )
      );
      setActiveItem('AccLowToHigh');
    },
    sortAccHighToLow: () => {
      setStats(
        [...recentStats].sort(
          (a: RecentStat, b: RecentStat) => Number(b.acc) - Number(a.acc)
        )
      );
      setActiveItem('AccHighToLow');
    },
    sortWpmLowToHigh: () => {
      setStats(
        [...recentStats].sort(
          (a: RecentStat, b: RecentStat) => Number(a.wpm) - Number(b.wpm)
        )
      );
      setActiveItem('WpmLowToHigh');
    },
    sortWpmHighToLow: () => {
      setStats(
        [...recentStats].sort(
          (a: RecentStat, b: RecentStat) => Number(b.wpm) - Number(a.wpm)
        )
      );
      setActiveItem('WpmHighToLow');
    },
    sortDefault: () => {
      setStats(recentStats);
      setActiveItem('default');
    },
  };

  const renderStats = () => {
    return currentItems.map((stat, index) => (
      <Card
        key={index}
        style={{
          width: '18rem',
          margin: '1rem 1rem auto auto',
          float: 'left',
        }}
        className={index === 0 && currentPage === 1 ? 'most-recent-stat' : ''}
      >
        <Card.Header>
          <p>{stat?.timeDateStamp}</p>
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <span>Option: </span>
            <span className="mode">{stat?.mode}</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <span>Duration: </span>
            <span className="duration">{stat?.duration}</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <span>WPM: </span>
            <span className="wpm">{stat?.wpm}</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <span>ACC: </span>
            <span className="acc">{stat?.acc}%</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <span>Error Rate: </span>
            <span className="error-rate">{stat?.errorRate}%</span>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    ));
  };

  return (
    <>
      <div className="statFunctions">
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
        {stats?.length  > 1 ? (
          <>
            <Dropdown>
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic"
                style={{ margin: '20px' }}
              >
                Sort By
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => filterBy.sortDefault()}
                  className={activeItem === 'default' ? 'active' : ''}
                >
                  Recent to Least Recent
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => filterBy.sortAccLowToHigh()}
                  className={activeItem === 'AccLowToHigh' ? 'active' : ''}
                >
                  Accurracy (Lowest to Hightest)
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => filterBy.sortAccHighToLow()}
                  className={activeItem === 'AccHighToLow' ? 'active' : ''}
                >
                  Accurracy(Highest to lowest)
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => filterBy.sortWpmLowToHigh()}
                  className={activeItem === 'WpmLowToHigh' ? 'active' : ''}
                >
                  WPM(Lowest to Highest)
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => filterBy.sortWpmHighToLow()}
                  className={activeItem === 'WpmHighToLow' ? 'active' : ''}
                >
                  WPM(Highest to lowest)
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button
              variant="flush"
              onClick={() => {
                if (window.confirm('Clear all Stats')) {
                  dispatch(removeAllStats());
                }
              }}
            >
              <div className="clear">
                <IonIcon
                  name="close-circle-outline"
                  size="large"
                  data-testid="reset"
                />
                <p>Clear All Rounds</p>
              </div>
            </Button>
          </>
        ) : (
          ''
        )}
      </div>
      <div className="statsContainer">
        {stats?.length ? renderStats() : <div>Complete a round</div>}
      </div>
      {stats?.length ? (
        <div className="pagination">
          <span style={{ marginRight: '10px' }}>
            Page {currentPage} of {totalPages}
          </span>
          <button
            style={{ marginRight: '10px' }}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      ) : (
        ''
      )}
    </>
  );
};
