import React from "react";
import "./Post.css";

const Post = () => {
    return (
        <>
            <div className='mainHeading'>
                <ul className='cards'>
                    <li className='cards_item'>
                        <div className='card'>
                            <div className='card_image'>
                                <img
                                    src='https://media.istockphoto.com/id/1393991206/photo/buddha-stupa-with-bright-blue-sky-at-morning-from-different-angle.jpg?s=612x612&w=0&k=20&c=K9KborD2LKUXO8Pl9enpJMklQcNMQ6CuojAhYj50nFU='
                                    alt='mixed vegetable salad in a mason jar. '
                                />
                            </div>
                            <div className='card_content'>
                                <h1 className='card_title'>
                                    Farmstand Salad • $9
                                </h1>
                                <div className='card_text'>
                                    <p>
                                        Dig into the freshest veggies of the
                                        season! This salad-in-a-jar features a
                                        mixture of leafy greens and seasonal
                                        vegetables, fresh from the farmer's
                                        market.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Post;
