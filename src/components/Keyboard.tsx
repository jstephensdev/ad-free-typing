import { keyboardConfig, key } from '../keyboardConfig';

export const Keyboard = () => {
    const keyRows: Array<key> = keyboardConfig;

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <code>
                            {keyRows.map((row: key) => (
                                <td className={row.class} key={row.id}>
                                    {row.name}
                                </td>
                            ))}
                        </code>
                    </tr>
                </tbody>
            </table>
        </>
    );
};
