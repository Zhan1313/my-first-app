import MyPosts from './My Posts/MyPosts'
import s from './Profile.module.css'

const Profile = (props) => {
    return <div>
    <div>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXypcPv6UTI2jfRH1eedMQjYoRexCMr0DVQQ&usqp=CAU'/>
    </div>
    <div>
      ava + description
    </div>
    <MyPosts postsData={props.postsData}/>
    </div>
}
export default Profile;