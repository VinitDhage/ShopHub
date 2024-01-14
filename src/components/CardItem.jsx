import React from 'react'
import {AiFillDelete} from "react-icons/ai"
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';
import { toast } from 'react-toastify';

const CardItem = (props) => {

    const item = props.item;
    const dispatch = useDispatch();


    const removeFromCart = ()=>{
        dispatch(remove(item.id));
        toast.success("Item removed to Cart", {
            position: toast.POSITION.TOP_CENTER
        });
    }

    return (
        <div>
            <div className=' flex  space-x-10'>
                <div >
                    <img src={item.image} className='  max-h-[189px] max-w-[178px]'/>
                </div>
                <div className=' '>
                    <div>
                        <h1 className=' text-gray-700 font-semibold text-lg text-left mt-1'>{item.title}</h1>
                        <h1 className='  text-gray-400 font-normal mt-2'>{item.description.split(" ").slice(0,18).join(" ")+ "..."}</h1>
                    </div>
                    <div className=' flex justify-between mt-8'>
                        <p className=' text-green-600 font-bold'>${item.price}</p>
                        <div
                        onClick={removeFromCart}
                        className=' bg-red-600 text-xs w-9 h-9 flex justify-center items-center  rounded-full text-white cursor-pointer'
                        >
                            <AiFillDelete/>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' bg-black h-[2px] mt-5 mb-5'></div>
        </div>
    )
}

export default CardItem
