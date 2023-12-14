// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogData

  return (
    <Link to={`/blogs/${id}`} className="item-link">
      <div className="details-cont">
        <div className="list-details">
          <img src={imageUrl} className="blog-image" alt={`item${id}`} />
          <div className="blog-detail-container">
            <p className="topic-name"> {topic} </p>
            <h1 className="title-name"> {title} </h1>
            <div className="blog-profile-container">
              <img
                src={avatarUrl}
                className="avatar-image"
                alt={`avatar${id}`}
              />
              <p className="author-name"> {author} </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
