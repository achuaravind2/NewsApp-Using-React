import image from '../assets/News.jpg'

const NewsItems = ({title, description, src, url}) => {
    return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-4 mx-5" style={{maxWidth:"275px", maxHeight:"550px"}}>
        <img src={src?src:image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,50)}</h5>
           <p className="card-text">{description?description.slice(0,90):"Live News"}</p>
            <a href={url} className="btn btn-primary">Read More</a>
        </div>
    </div>
    )
}

export default NewsItems 