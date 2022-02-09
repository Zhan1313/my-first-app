import s from './Post.module.css'


const Post = ({message, likesCount}) => {
  return (
    <div className={`${s.item} ${s.active}`}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-FsLErbipcdGJRKhppMO4FuXuiCGXLJgDw&usqp=CAU" />
        {message}
      <div>
        <span>like</span>
          {likesCount}
      </div>
    </div>

  )
}
export default Post;