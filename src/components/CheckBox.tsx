export const Checkbox = (props: {
    label: string;
    checked: boolean;
    onChange: () => void;
}) => {
    return (
        <label>
            <input
                type="checkbox"
                checked={props.checked}
                onChange={props.onChange}
            />
            {props.label}
        </label>
    );
};
