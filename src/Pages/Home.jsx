import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import Product from '../components/Product';


const Home = () => {

    const [loading ,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);

    const API_URL = "https://fakestoreapi.com/products";

    async function fetchProductData(){
        setLoading(true);
        try{
            let response = await fetch(API_URL);
            const data = await response.json();

            setPosts(data);
            // console.log(data)
        }
        catch(error){
            console.log("Error Agaya Ji");
            setPosts([]);
        }
        setLoading(false);
    }

    useEffect(()=>{
        fetchProductData();
    },[])

    // console.log(posts);

    // console.log("jii")


    return (
        <div>
            {
            loading ? (<Spinner />):
                ( posts.length > 0 ? 
                (
                    <div className=' grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>
                        {
                            posts.map((post)=>{
                                return <Product key = {post.id} post={post}/>
                            })
                        }
                        
                    </div>
                ):
                (
                    <div className=' flex justify-center items-center'>
                        <p>No Data Found</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Home
