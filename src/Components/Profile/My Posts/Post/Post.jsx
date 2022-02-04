import s from './Post.module.css'


const Post = (props) => {
  return (
    <div className={`${s.item} ${s.active}`}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-FsLErbipcdGJRKhppMO4FuXuiCGXLJgDw&usqp=CAU" />
        {props.message}
      <div>
        <span>like</span>
          {props.likesCount}
      </div>
    </div>

  )
}
export default Post;