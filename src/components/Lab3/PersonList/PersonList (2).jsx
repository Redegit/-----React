import { useEffect, useState } from "react";
import { personList } from "../../classes/Person";


export const PersonList = () => {
    const [scientists, setScientists] = useState(personList)
    const [inputData, setInputData] = useState({})

    const headers = ['', 'Имя', 'Год рождения', 'Год смерти', 'Университет', 'Город'];
    const keyList = ['', 'name', 'birth_year', 'death_year', 'university', 'city']


    const filterScientists = () => {
        let resList = [...personList];
        for (var filterColumn in inputData) {
            const value = inputData[filterColumn];

            resList = resList.filter(person => {
                const string = person[filterColumn].toString().toLowerCase()
                if (string.includes(value.toLowerCase()))
                    return true
                else {
                    return false
                }
            });
        }
        setScientists(resList)
    }

    useEffect(() => {
        filterScientists();
    }, [inputData]);

    const handleFilterChange = (e) => {
        const filterColumn = e.target.name;
        const value = e.target.value;
        setInputData({ ...inputData, [filterColumn]: value })
    }

    return (
        <div className="container">
            <table className="person-table table">
                <thead>
                    <tr>
                        {!keyList.empty && keyList.map((key, index) =>
                            <th key={index}>
                                {key && <input name={key} onChange={handleFilterChange} type="text" />}
                            </th>
                        )}
                    </tr>
                    <tr>
                        {!headers.empty && headers.map((item, index) => {
                            return (
                                <th scope="col" key={index}>
                                    {item}
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {!scientists.empty && scientists.map((person, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    <img draggable={false} height={'150px'} className="rounded mx-auto d-block" src={person.img_url} alt={person.name} />
                                </td>
                                <td>{person.name}</td>
                                <td>{person.birth_year}</td>
                                <td>{person.death_year}</td>
                                <td>{person.university}</td>
                                <td>{person.city}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}
