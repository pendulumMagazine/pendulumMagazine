import { useState } from 'react';
import Parse from 'parse/dist/parse.min.js';


const UploadPost = () => {

        const [post, setPost] = useState({
                catogory: 'malayalam',
                title: '',
                description: '',
                batch: '',
                author: ''
        })

        const handlePosts = (e) => {
                setPost({
                        ...post,
                        [e.target.name]: e.target.value
                })
        }

        const handleSubmit = async () => {
                setPost({
                        ...post,
                })
                if (post.catogory !== '' && post.title !== '' && post.description !== '' && post.batch !== '') {
                        try {
                                const Post = new Parse.Object('Post');

                                Post.set(post);
                                await Post.save();
                                console.log(post)
                                alert('Post Uploaded');


                        } catch (error) {
                                console.log("Error Posting", error)
                        }
                        setPost({
                                catogory: 'malayalam',
                                title: '',
                                description: '',
                                batch: '',
                                author: ''
                        })
                }
                else {
                        alert("Please enter value")
                }
        }

        return (
                <div>
                        <center>




                                <div>
                                        <input value={post.title} name='title' type='text' onChange={handlePosts} placeholder='title' />
                                </div>

                                <div>
                                        <input value={post.author} name='author' type='text' onChange={handlePosts} placeholder='author' />
                                </div>

                                <div>
                                        <textarea style={{ width: 1000, height: 500 }} value={post.description} name='description' type='textarea' onChange={handlePosts} placeholder='description' />
                                </div>

                                <div onChange={handlePosts}>
                                        <input type="radio" value="alumni" name="batch" />alumni
                                        <input type="radio" value="22nd" name="batch" />2022
                                        <input type="radio" value="23rd" name="batch" />2023
                                        <input type="radio" value="24th" name="batch" />2024
                                        <input type="radio" value="25th" name="batch" />2025
                                        <input type="radio" value="26th" name="batch" />2026
                                        <input type="radio" value="27th" name="batch" />2027

                                </div>

                                <div>
                                        <div>
                                                <select value={post.catogory} name='catogory' onChange={handlePosts}>
                                                        <option value="malayalam">malayalam</option>
                                                        <option value="english">english</option>
                                                        <option value="hindi">hindi</option>
                                                </select>
                                        </div>
                                        {post.catogory}
                                </div>


                                {/* <div className="App">
                                        <form onSubmit={handleImageSubmit} className='form'>
                                                <input type='file' />
                                        </form>
                                        {
                                                !post.img &&
                                                <div style={{ width: '100px', border: 'white', borderWidth: '2px' }} className='outerbar'>
                                                        <div className='innerbar' style={{ width: `${progresspercent}%`, backgroundColor: 'white' }}>{progresspercent}%</div>
                                                </div>
                                        }
                                        {
                                                post.img &&
                                                <div>
                                                        <img src={post.img} alt='uploaded file' height={200} />
                                                </div>
                                        }
                                        
                                </div> */}
                                <input type='submit' onClick={handleSubmit} />
                        </center>
                </div >
        )
}

export default UploadPost;