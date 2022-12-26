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
                        <section>
                            <h6>Easy or Hard:</h6>
                            <p>
                                Easy is selected by default. Words of 5 or less
                                characters will appear while words of any
                                length, capitalization, and periods will appear
                                when Hard is selected
                            </p>
                        </section>
                    )}
                </section>
            </section>
        </>
    );
};
