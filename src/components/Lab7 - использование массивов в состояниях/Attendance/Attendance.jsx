import "./attendance.scss"

const Attendance = () => {
    const totalDays = 5

    const days = []
    for (var i = 0; i < totalDays; i++) {
        days.push(i)
    }

    return (
        <div className="glass-card attendance">

            <table className="attendance_table">
                <thead>
                    <th>Студент</th>
                    <th>Баллов</th>
                    <th>Пропусков</th>
                    <th>23.11.2023</th>
                    <th>23.11.2023</th>
                    <th>30.11.2023</th>
                    <th>30.11.2023</th>
                    <th>04.12.2023</th>
                </thead>
                <tbody>
                    {
                        !data.empty && data.map((stud, index) => {
                            return <tr key={index}>
                                <td>{stud.name}</td>
                                <td>{stud.points}</td>
                                <td>{totalDays - stud.att.length}</td>

                                {
                                    days.map((d, i) => {
                                        return <td key={i}>{stud.att.includes(d) ? '+' : '-'}</td>
                                    })
                                }
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Attendance;



const data = [
    {
        name: "Абдулаев Муса Исрапилович",
        att: [0, 1, 2],
        points: 15
    },
    {
        name: "Арясин Никита Анатольевич",
        att: [0, 1, 2, 3, 4],
        points: 10
    },
    {
        name: "Битулев Валерий Геннадьевич",
        att: [0, 3, 4],
        points: 8
    },
    {
        name: "Егорова Ева Евгеньевна",
        att: [2, 3, 4],
        points: 19
    },
    {
        name: "Журавлева Анастасия Олеговна",
        att: [0, 1, 2, 3],
        points: 11
    },
]