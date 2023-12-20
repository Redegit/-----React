import { useEffect, useState } from "react";
import { Switcher } from "./Switcher";
import "./lab5.scss"

export const ToggleGame = () => {
    const SWITCH_COUNT = 5;

    const [switchList, setSwitchList] = useState([]);
    const [switchStates, setSwitchStates] = useState(Object.fromEntries(Array.from({ length: SWITCH_COUNT }, (_, i) => [i, false])));
    const [forceSwitchToggleIndex, setForceSwitchToggleIndex] = useState([]);
    const [previousChangedIndex, setPreviousChangedIndex] = useState(0);


    useEffect(() => {
        let switchListTmp = []

        for (let i = 0; i < SWITCH_COUNT; i++) {
            switchListTmp.push(
                {
                    index: { i },
                    states: { switchStates },
                    setStates: { setSwitchStates }
                }
            )
        }

        setSwitchList(switchListTmp)
    }, []);

    const handleSwitcherChange = (index, value) => {
        setSwitchStates(prevState => {
            return { ...prevState, [index]: value };
        });
    }

    useEffect(() => {
        let enabledList = []
        let disabledList = []
        for (let key in switchStates) {
            if (switchStates[key] === true)
                enabledList.push(key);
            else {
                disabledList.push(key)
            }
        }

        console.log(previousChangedIndex);
        if (enabledList.length === 0 || disabledList.length === 0) {
            if (enabledList.length === 0) { setForceSwitchToggleIndex(randomChoose(disabledList, randInt(2, 3)).filter(n => n !== previousChangedIndex)) }
            if (disabledList.length === 0) { setForceSwitchToggleIndex(randomChoose(enabledList, randInt(2, SWITCH_COUNT - 1)).filter(n => n !== previousChangedIndex)) }
        } else {
            if (disabledList.length > enabledList.length) {
                setForceSwitchToggleIndex(randomChoose(disabledList, randInt(0, Math.min(2, disabledList.length - 1))).filter(n => n !== previousChangedIndex))
            } else {
                setForceSwitchToggleIndex(randomChoose(enabledList, randInt(0, Math.min(2, enabledList.length - 1))).filter(n => n !== previousChangedIndex))
            }
        }

    }, [switchStates]);

    return (
        <div className="p-5 glass-card d-flex justify-content-center align-items-center flex-column mt-5 lab5">
            <h2 className="title">Ой, что-то сломалось!</h2>
            {!switchList.empty && switchList.map((item, index) => {
                return (
                    <div key={index} className="lab5-row">
                        <span>{`Пофиксить баг ${index + 1}`}</span>
                        <Switcher
                            index={index}
                            cb={handleSwitcherChange}
                            toggler={forceSwitchToggleIndex}
                            setPrevChanged={setPreviousChangedIndex}
                        />
                    </div>
                )
            })}
        </div>
    );
}

const randomChoose = (iter, n) => {
    let indices = [];

    while (indices.length < n) {
        const randomIndex = randInt(0, iter.length)
        if (!indices.includes(randomIndex)) { indices.push(randomIndex) }
    }

    return indices;
}

const randInt = (bottom, top) => {
    return Math.floor(Math.random() * (top - bottom) + bottom)
}
