import Friend from "./Friend";


const Friends = ({friendsData}) => {
    let friends = friendsData.map(f => <Friend name={friendsData.name} id={friendsData.id} key={friendsData.id} />);

    return (
        <div>
            <div>
                {friends}
            </div>
        </div>
    )
}
export default Friends;