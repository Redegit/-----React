import { useEffect, useState } from "react";

export const Switcher = ({ index, cb, toggler, setPrevChanged }) => {
    const [checked, setChecked] = useState(false)

    const handleChange = () => {
        cb(index, !checked);
        setChecked(!checked);
        setPrevChanged(index);
    }

    useEffect(() => {
        if (toggler.includes(index)) {
            cb(index, !checked);
            setChecked(!checked);
        };
    }, [toggler]);

    return (
        <label className={"switch"}>
            <span onClick={handleChange} data-checked={checked} className={"slider"}></span>
        </label>
    );
}