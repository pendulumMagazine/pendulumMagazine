import { useEffect, useState } from "react";
import { BrowserRouter, Link, Router, useNavigate, useParams } from "react-router-dom";
import '../styles/Read.css'
import Parse from 'parse/dist/parse.min.js';




const ReadingPage = () => {

        let params = useParams();
        const navigate = useNavigate();
        // console.log(params)

        const [info, setInfo] = useState([]);

        useEffect(() => {
                (async () => {
                        const query = new Parse.Query('Post');
                        // equalTo can be used in any data type
                        const post = await query.get(params.id);
                        setInfo({
                                catogory: post.get('catogory'),
                                title: post.get('title'),
                                description: post.get('description'),
                                img: JSON.stringify(post.get('img')._url),
                                batch: post.get('batch'),
                                author: post.get('author')
                        })

                        // console.log(info.img)
                })();
                return () => {
                };
        }, []);
        return (
                <div>
                        <p className="cursor backButton1" onClick={() => navigate(-1)}>&#x1F870;</p>
                        {/* <div onClick={() => navigate(-1)} className="cursor button-28">&#x1F870;</div> */}
                        <center
                                className="cursor hero"
                                style={{
                                        backgroundImage: `url(${info.img})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        height: '40vh',
                                }}>
                                <div

                                        style={{
                                                width: '100%',
                                                textAlign: 'center',
                                                fontSize: '250%',
                                                color: 'white',
                                                marginLeft: '7%',
                                                marginTop: '7%'
                                                // zIndex: '1',
                                                // opacity: '1'
                                        }}
                                >
                                        <h1 className='cursor module line-clamp headingText' style={{
                                                textAlign: 'center',
                                                fontSize: '125%',
                                        }}>{info.title}</h1>

                                        <p className='cursor module line-clamp headingText' style={{
                                                textAlign: 'center',
                                                fontSize: '50%',
                                                color: 'white',
                                        }}>
                                                {info.author}
                                        </p>
                                        <p className='cursor module line-clamp headingText' style={{
                                                textAlign: 'center',
                                                fontSize: '50%',
                                                color: 'white',
                                        }}>
                                                {`(`}{info.batch}{` batch)`}
                                        </p>
                                </div>
                        </center>
                        <div>
                                <p style={{ whiteSpace: 'break-spaces', padding: '3%', color: 'black', fontSize: '18px', letterSpacing: '0.5px', lineHeight: '1.5', textIndent: '10px', fontWeight: '700' }}>
                                        {info.description}
                                </p>
                        </div>
                </div>
        )
}

export default ReadingPage;