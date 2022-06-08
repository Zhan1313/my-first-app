const TableItself = (props) => {
    return (
        <table className='table'>
            <thead>
            <tr>
                <th onClick={props.onSort.bind(null, 'id')}>
                    ID {props.sortField === 'id' ? <small>{props.sortType}</small> : null}
                </th>
                <th onClick={props.onSort.bind(null, 'name')}>
                    Name {props.sortField === 'name' ? <small>{props.sortType}</small> : null}
                </th>
                <th onClick={props.onSort.bind(null, 'status')}>
                    Status {props.sortField === 'status' ? <small>{props.sortType}</small> : null}
                </th>
            </tr>
            </thead>
            <tbody>
            {
                props.usersData.map(user => (
                    <tr key={user.id} onClick={props.onRowSelect.bind(null, user)}>
                        <th>{user.id}</th>
                        <th>{user.name}</th>
                        <th>{user.status === null ? 'No status' : user.status}</th>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}

export default TableItself;