

import React, { useState } from 'react'
import styled from 'styled-components';

const DetailLike = ({ Detail }) => {

    const [detail, setDetail] = useState(Detail);

    const handleChangeColor = () => {
        if (detail.color === "#fe415c") {
            setDetail({ color: "#dbdbdb", likes_count: detail.likes_count - 1 });
        } else {
            setDetail({
                color: "#fe415c",
                likes_count: detail.likes_count + 1,
            });
        }
    };
    return (
        <Like>
            <div className="likeArea">
                <button className="likeCount">
                    <button
                        onClick={handleChangeColor}
                        style={{ color: detail.color }}
                        className="fas fa-heart"
                    ></button>
                    <span>{detail.likes_count}</span>
                </button>
                <button className="likePeople">
                    <i class="far fa-user-circle"></i>
                </button>
            </div>
        </Like>
    )
}

const Like = styled.div`
    .likeArea {
    display: flex;
    flex-direction:row;
    margin-top: 20px;
    .likeCount {
      height: 30px;
      border-radius: 15px;
      border: 1px solid #e1e2d3;
      margin-right: 12px;
      padding: 0 15px;
      background-color: #fff;
      cursor: pointer;
      button {
        cursor: pointer;
        padding-right: 10px;
        font-size: 15px;
        background-color: #fff;
        border: none;
      }
      span {
        font-size: 15px;
      }
    }
    .likePeople {
      border:none;
      background: #fff;
      cursor: pointer;
      i {
        list-style:none;
        font-size: 24px;
      }
    }
  }
`;

export default DetailLike;
