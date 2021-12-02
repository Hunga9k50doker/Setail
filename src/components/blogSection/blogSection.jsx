import './blogSection.scss';
import { Link } from 'react-router-dom';
import {BanBlogPage, BlogOne, BlogTwo, BlogThree, BlogFour, BlogFive, BlogSix, BlogSeven } from '../../assets/img';

const blog = [
    {
        id: '1',
        img: BlogOne,
        title: "Letters From Florida",
        content: "Al alit emnos lnipedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim.",
        time: "December 7, 2016",
    },
    {
        id: "2",
        img: BlogTwo,
        title: "Down Town",
        content: "Al alit emnos lnipedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim.",
        time: "December 6, 2016",
    },
    {
        id: "3",
        img: BlogThree,
        title: "Photography",
        content: "Al alit emnos lnipedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim.",
        time: "December 5, 2016",
    },
    {
        id: "4",
        img: BlogFour,
        title: "It’s Time To Travel",
        content: "Al alit emnos lnipedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim.",
        time: "December 4, 2016",
    },
    {
        id: "5",
        img: BlogFive,
        title: " Inspired By Food",
        content: "Al alit emnos lnipedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim.",
        time: "December 3, 2016",
    },
    {
        id: "6",
        img: BlogSix,
        title: "Old Town",
        content: "Al alit emnos lnipedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim.",
        time: "December 2, 2016",
    },
    {
        id: "7",
        img: BlogSeven,
        title: "Hiking",
        content: "Al alit emnos lnipedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim.",
        time: "December 1, 2016",
    }
]

const BlogItems = (props) => {
    return (
        <article className="blog-item" >
            <Link to="" >
                <img 
                    src={props.blog.img} 
                    alt={`blog-img-${props.blog.id}`} />
                <h4 className="title">{props.blog.title}</h4>
            </Link>
            <p>{props.blog.content}</p>
            <div className="post-info">
                <Link className="time" to="">{props.blog.time}</Link>
                <Link className="comment-count" to="">
                    <span className="comment-icon" />
                    2 Comment</Link>
            </div>
        </article>
    );
}
const BlogSection = () => {
    return (
        <div className="blog-section">
            <div className="column">
                <BlogItems
                    blog={blog[0]}
                />
                <div className="post-text">
                    <Link to="" className="quote">
                        Ut audia iracu. An eaem die iste lique.
                    </Link>
                    <h5>Jenny Loren</h5>
                    <span className="quotes-icon">,,</span>
                </div>
                <BlogItems
                    blog={blog[5]}
                />
            </div>
            <div className="column">
                <BlogItems
                    blog={blog[1]}
                />
                <BlogItems
                    blog={blog[3]}
                />
            </div>
            <div className="column">
                <BlogItems
                    blog={blog[2]}
                />
                <BlogItems
                    blog={blog[4]}
                />
                <BlogItems
                    blog={blog[6]}
                />
            </div>
        </div>)
}

const BlogBanner = () => {
    return <div className="blog--banner">
        <img src = {BanBlogPage} alt="blog-banner"/>
        <div>
            <h1 id="a">Amazing tour</h1>
            <h2 id="b">Blog Masonry</h2>
        </div>
    </div>
}
export {BlogSection,BlogBanner};
