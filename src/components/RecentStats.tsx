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
import { Button, Col } from 'react-bootstrap';

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
                <h6>Rounds (12 Recent Rounds)</h6>
                <Button variant="flush" onClick={() => updateText()}>
                    <Container className="ionIcon">
                        <IonIcon
                            title="New Round"
                            name="arrow-back-circle-outline"
                            size="large"
                            data-testid="new-text-reset"
                        />
                        <p>New Round</p>
                    </Container>
                </Button>
                {recentStats?.length ? (
                    <Button
                        variant="flush"
                        onClick={() => dispatch(removeAllStats())}
                    >
                        <Container className="clear">
                            <IonIcon
                                name="close-circle-outline"
                                size="large"
                                data-testid="reset"
                            />
                            <p>Clear All Rounds</p>
                        </Container>
                    </Button>
                ) : (
                    <></>
                )}
                <Container
                    style={{
                        maxHeight: 'calc(100vh - 210px)',
                        overflowY: 'auto',
                    }}
                >
                    <Row style={{ marginLeft: '0rem' }}>
                        {recentStats?.length ? (
                            recentStats.map((stat, index) => (
                                <Col key={index} md="auto">
                                    <Card
                                        key={index}
                                        style={{
                                            width: '16rem',
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
                </Container>
            </section>
        </>
    );
};
