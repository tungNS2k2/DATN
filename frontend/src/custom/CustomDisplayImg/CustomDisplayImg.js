import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Modal from "./Model"; // Import modal component

const DisplayImg = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;

    a {
        margin: 1rem 2.4rem 2rem 0;
        width: 20%;
        height: auto;
        text-decoration: none;

        .img-box {
            overflow: hidden;
            width: 100%;
            border-radius: 10px;
            position: relative;

            img {
                box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-bottom: 1px solid black;
                border-radius: 10px;
                transition: transform 0.7s ease;
            }

            .title {
                position: absolute;
                bottom: 0px;
                font-size: 13px;
                color: white;
                font-family: serif;
                display: none;
                padding: 4px 0px 8px 4px;
                width: 100%;
                background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 1) 100%);
                min-height: 24px;
            }

            span {
                overflow: hidden;
                width: 80%;
                white-space: nowrap;
                text-overflow: ellipsis;
                display: inline-block;
            }

            .fa-heart {
                position: absolute;
                bottom: 4px;
                right: 2px;
                margin-right: 4px;
                font-size: 16px;
                color: white;
            }

            img:hover {
                transform: scale(1.5);
            }

            img:hover + .title {
                display: block;
            }
        }

        &:hover .title {
            display: block;
        }
    }
`;

const CustomDisplayImg = (props) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageUrl, event) => {
        event.preventDefault(); // Prevent default action
        setSelectedImage(imageUrl);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <DisplayImg className="CustomDisplayIMG">
                {props.imgUrls && props.imgUrls.filter(item => item.imageUrl).map((item, index) => (
                    <NavLink key={index} to={item.imageUrl} className={({ isActive }) => isActive ? 'url-item active' : 'url-item'}>
                        <div className="img-box" onClick={(event) => handleImageClick(item.imageUrl, event)}>
                            <img className='img-item' src={item.imageUrl} alt={item.nameImage} />
                            <div className='title'>
                                <span>{item.nameImage}</span>
                                <i className="fa-solid fa-heart"></i>
                            </div>
                        </div>
                    </NavLink>
                ))}
            </DisplayImg>
            {selectedImage && <Modal imageUrl={selectedImage} onClose={closeModal} />}
        </>
    );
};

export default CustomDisplayImg;
