import Friend from "./Friend";


const Friends = ({friendsData}) => {
    let friends = friendsData.map(f => <Friend name={f.name} id={f.id} key={f.id} />);

    return (
        <div>
            <h3>FRIENDS</h3>
            <div>
                {friends}
            </div>
        </div>
    )
}
export default Friends;