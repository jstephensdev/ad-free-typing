export const Checkbox = (props: {
    label: string;
    checked: boolean;
    onChange: any;
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
