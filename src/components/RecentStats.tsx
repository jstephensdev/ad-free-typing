import IonIcon from '@reacticons/ionicons';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { setUrl } from '../store/slices/routingSlice';
import {
    RecentStat,
    removeAllStats,
    resetStats,
} from '../store/slices/statsSlice';
import { setText, TextMode } from '../store/slices/textSlice';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Col } from 'react-bootstrap';

interface Props {
    recentStats: RecentStat[];
}

export const RecentStats = ({ recentStats }: Props) => {
    const dispatch = useAppDispatch();
    const mode: TextMode = useAppSelector((state) => state.text.mode);

    const updateText = () => {
        dispatch(resetStats());
        dispatch(setText(mode));
        dispatch(setUrl('/'));
    };

    return (
        <>
            <section>
                <Container>
                    <div>
                        <h6>Rounds (12 Recent Rounds)</h6>
                    </div>
                    <div className="ionIcon" onClick={() => updateText()}>
                        <IonIcon
                            title="New Round"
                            name="arrow-back-circle-outline"
                            size="large"
                            data-testid="new-text-reset"
                        />
                        <p>New Round</p>
                    </div>
                    <Row>
                        {recentStats?.length ? (
                            recentStats.map((stat, index) => (
                                <Col key={index}>
                                    <Card
                                        key={index}
                                        style={{
                                            width: '18rem',
                                            margin: '1rem auto',
                                        }}
                                    >
                                        <Card.Header>
                                            <p>{stat?.timeDateStamp}</p>
                                        </Card.Header>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>
                                                <span className="mode">
                                                    {stat?.mode}
                                                </span>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <span>Duration:</span>
                                                <span className="duration">
                                                    {stat?.duration}
                                                </span>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <span>WPM:</span>
                                                <span className="wpm">
                                                    {stat?.wpm}
                                                </span>
                                            </ListGroup.Item>

                                            <ListGroup.Item>
                                                <span>ACC:</span>
                                                <span className="acc">
                                                    {stat?.acc}%
                                                </span>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <span>Error Rate:</span>
                                                <span className="error-rate">
                                                    {stat?.errorRate}%
                                                </span>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col>
                            ))
                        ) : (
                            <>
                                <p>Complete a Round</p>
                            </>
                        )}
                    </Row>
                    {recentStats?.length ? (
                        <div
                            className="clear"
                            onClick={() => dispatch(removeAllStats())}
                        >
                            <IonIcon
                                name="close-circle-outline"
                                size="large"
                                data-testid="reset"
                            />
                            <p>Clear All Rounds</p>
                        </div>
                    ) : (
                        <></>
                    )}
                </Container>
            </section>
        </>
    );
};
