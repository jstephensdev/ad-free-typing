import IonIcon from '@reacticons/ionicons';

export const Modal = (props: any) => {
    return (
        <>
            <section className="modal">
                <section className="text-section modal-content">
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
                        <section className="text-section">
                            <ul>
                                <li>Easy by default.</li>
                                <li>Easy: words with 5 or less characters.</li>
                                <li>
                                    Hard: words of any length, capitalization,
                                    and periods.
                                </li>
                            </ul>
                        </section>
                    )}
                </section>
            </section>
        </>
    );
};
