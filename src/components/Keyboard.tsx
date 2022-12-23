import { keyboardConfig, key } from '../keyboardConfig';

export const Keyboard = () => {
    const keyRows: Array<Array<key>> = keyboardConfig;

    return (
        <>
            <table>
                <tbody>
                    {keyRows.map((row: Array<key>, index) => (
                        <tr className="keyboard-row" key={index}>
                            {row.map((key: key) => (
                                <td className={key.class} key={key.id}>
                                    {Array.isArray(key.name) ? (
                                        <span className="keyboard-key-double">
                                            <span>{key.name[0]}</span>
                                            <span>{key.name[1]}</span>
                                        </span>
                                    ) : (
                                        key.name
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};
