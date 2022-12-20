import { keyboardConfig, key } from '../keyboardConfig';

export const Keyboard = () => {
    const keyRows: Array<Array<key>> = keyboardConfig;

    return (
        <>
            <table>
                <tbody>
                    {keyRows.map((row: Array<key>, index) => (
                        <tr key={index}>
                            {row.map((key: key) => (
                                <td className={key.class} key={key.id}>
                                    {key.name}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};
