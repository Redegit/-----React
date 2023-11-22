import { useEffect, useState } from "react";

export const Switcher = ({ index, cb, toggler }) => {
    const [checked, setChecked] = useState(false)

    const handleChange = () => {
        cb(index, !checked);
        setChecked(!checked);
    }

    useEffect(() => {
        if (toggler.includes(index)) {
            handleChange();
        };
    }, [toggler]);

    return (
        <label className={"switch"}>
            <span onClick={handleChange} data-checked={checked} className={"slider"}></span>
        </label>
    );
}