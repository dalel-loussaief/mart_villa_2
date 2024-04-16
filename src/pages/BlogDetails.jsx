import React, { useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import { feeds } from "../data/dummyData";
import { BlogPostsList} from "../components/common/page-componets";
import axios from 'axios';


const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null)

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/userAuth/blog-detail/${id}/`);
                setBlog(response.data);
            } catch (error) {
                console.error('Error fetching blog data:', error);
            }
        };
        fetchBlog();
    }, [id]);

    return (
        <><div className="pt-20 px-[3%] md:px-[6%]">
            {blog ? (
                <>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="text-center lg:text-left">
                            <h2 className="text-2xl font-semibold">{blog.titre}</h2>
                            <p className="text-lg mb-4">{blog.date}</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-8 lg:flex-row">
                        <div className="max-w-[900px]">
                            <div className="mb-6"> {/* Ajout de la classe de marge en bas */}
                                <img src={`http://localhost:8000/userAuth${blog.image}`} alt={blog.titre} className="w-full h-auto lg:w-auto lg:h-[300px] object-cover" />
                            </div>
                            <div className="mb-10 flex gap-x-2 text-sm"> {/* Ajout de la classe de marge en bas */}
                                <div className="bg-green-400 text-white px-4 rounded-full text-3xl font-semibold">
                                    {/* {blog.category} */}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <p className="text-lg mb-6 text-justify">{blog.contenu}</p>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <p>Blog not found</p>
            )}
        </div>
        <div className="px-[3%] md:px-[6%]"><BlogPostsList /></div></>

    );
};

export default BlogDetails;