import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CardItem from '../components/CardItem';


const Cart = () => {

    const {cart} = useSelector((state)=>state);
    const [totalAmount,setTotalAmount] = useState(0);

    useEffect( ()=>{
        setTotalAmount( cart.reduce((acc,curr)=> acc + curr.price,0));
    },[cart])

    return (
        <div>
            {
                cart.length > 0 ? 
                (<div className=' lg:flex max-w-6xl mx-auto space-x-12'>
                    <div className=' lg:max-w-3xl md:ml-3 md:mr-4 sm:ml-2 sm:mr-3 xs:ml-2 xs:mr-3 '>
                        {
                            cart.map((item)=>{
                                return <CardItem key={item.id} item={item} />
                            })
                        }
                        
                    </div>
                    <div className=' flex flex-col justify-evenly'>
                        <div>
                            <div className=' text-green-800 font-semibold'>Your Cart</div>
                            <div className=' text-green-800 text-4xl font-bold'>Summary</div>
                            <p className=' mt-2'>
                                <span className=' font-semibold'>Total Item: {cart.length}</span>
                            </p>
                        </div>

                        <div>
                            <p className=' font-semibold mb-3'>Total Amount: <span className=' font-bold'>${totalAmount}</span></p>
                            <button
                            className=' bg-green-600 text-white font-semibold rounded-md text-[25px] p-1 px-14 text-center'
                            >Checkout now</button>
                        </div>
                    </div>
                </div>):
                (<div className='absolute top-[50%] left-[45%] flex flex-col items-center'>
                    <h1 className=' text-green-600 font-bold mb-3' >Cart Empty</h1>
                    <Link to={'/'}>
                        <button
                        className=' bg-green-600 text-white font-semibold rounded-md text-[25px] p-1 px-14 text-center'
                        >
                            Shop Now
                        </button>
                    </Link>
                </div>)
            }
        </div>
    )
}

export default Cart
