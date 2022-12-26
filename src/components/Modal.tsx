import IonIcon from '@reacticons/ionicons';

export const Modal = (props: any) => {
    return (
        <>
            <section className="modal">
                <section className="modal-content">
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

                    <p>hello world</p>
                </section>
            </section>
        </>
    );
};
