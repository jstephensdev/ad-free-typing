import IonIcon from '@reacticons/ionicons';

export const Modal = (props: any) => {
    return (
        <>
            <section className="modal">
                <section className="modal-content">
                    <div className="modal-title">
                        <h4>{props.title}</h4>
                        <a
                            href="#"
                            onClick={() =>
                                props.setOpenModal(
                                    (openModal: boolean) => !openModal
                                )
                            }
                        >
                            <IonIcon
                                className="close"
                                name="close-outline"
                                size="large"
                            ></IonIcon>
                        </a>
                    </div>
                    {props.title === 'Settings:' ? (
                        <section className="setting-options">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={props.checkedEasy}
                                    onChange={props.handleCheckChange}
                                />
                                Easy
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={props.checkedHard}
                                    onChange={props.handleCheckChange}
                                />
                                Hard
                            </label>
                        </section>
                    ) : (
                        <></>
                    )}
                </section>
            </section>
        </>
    );
};
