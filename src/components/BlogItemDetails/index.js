// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const blogData = await response.json()
    console.log(blogData)

    const formattedData = {
      title: blogData.title,
      author: blogData.author,
      avatarUrl: blogData.avatar_url,
      content: blogData.content,
      imageUrl: blogData.image_url,
    }
    this.setState({blogData: formattedData, isLoading: false})
  }

  renderBlogDetailsItem = () => {
    const {blogData} = this.state
    const {id, title, author, avatarUrl, imageUrl, content} = blogData

    return (
      <div className="detailed-container">
        <h1 className="title-heading">{title}</h1>
        <div className="avatar-container">
          <img src={avatarUrl} className="avatar-image" alt={`avatar${id}`} />
          <p className="title-nm"> {author} </p>
        </div>
        <img src={imageUrl} alt={title} className="image" />
        <p className="content"> {content} </p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="blog-details-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogDetailsItem()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
