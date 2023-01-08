export const RadioOption = (props: {
    label: string;
    checked: boolean;
    onChange: () => void;
}) => {
    return (
        <label>
            <input
                type="radio"
                checked={props.checked}
                onChange={props.onChange}
            />
            {props.label}
        </label>
    );
};
