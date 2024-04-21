import { useContext, useEffect, useState, useCallback } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";
import { URL } from "../url";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const EditPost = () => {
    const postId = useParams().id;
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const fetchPost = useCallback(async () => {
        try {
            const res = await axios.get(URL + "/api/posts/" + postId);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        } catch (err) {
            console.log(err);
        }
    }, [postId]); // Include postId in the dependency array

    useEffect(() => {
        fetchPost(); // Call fetchPost inside useEffect
    }, [fetchPost]); // Include fetchPost in the dependency array

    const handleUpdate = async (e) => {
        e.preventDefault();
        const post = {
            title,
            desc,
            username: user.username,
            userId: user._id,
        };

        try {
            const res = await axios.put(URL + "/api/posts/" + postId, post, { withCredentials: true });
            navigate("/posts/post/" + res.data._id);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <Navbar brand=" BlogSpace" />
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h2 className="text-center my-5">Edit Blog Post</h2>
                        <form>
                            <div className="form-group mb-3">
                                <label htmlFor="postTitle">Title:</label>
                                <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" className="form-control" id="postTitle" placeholder="Enter the title of your blog post" required />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="postContent">Content:</label>
                                <textarea onChange={(e) => setDesc(e.target.value)} value={desc} className="form-control" id="postContent" rows="5" placeholder="Write your blog post content here" required></textarea>
                            </div>
                            <button onClick={handleUpdate} className="btn btn-primary btn-block">Update Post</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default EditPost;
