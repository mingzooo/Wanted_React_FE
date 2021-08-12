import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Navbar from '../../components/common/Navbar/navbar';

const Bookmark = ({ history }) => {
  const [bookmarkList, setBookmarkList] = useState([]);

  const token = localStorage.getItem("X-ACCESS-TOKEN");
  useEffect(() => {
    fetch(`/bookmarks`, {
      method: 'GET',
      headers: {
        "X-ACCESS-TOKEN": token
      },
      redirect: 'follow'
    })
      .then((response) => response.json())
      .then(
        function innerFunc(res) {
          setBookmarkList(res.result);
          console.log(bookmarkList);
        }
      )
  }
  )
  return (
    <div>
      <Navbar />
      <BookWrap>
        <BookmarkContainer>
          <p>북마크</p>
          <List bookmark>
            {bookmarkList.map(item => {
              return (
                <ListItem id={item.id} oneLine>
                  <img src={item.image} alt="company logo" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.companyName}</p>
                    <span>
                      한국 . 서울
                    </span>
                  </div>
                  <TagList>
                    {item.tags &&
                      item.tags.map(tag => {
                        return <li>{tag}</li>;
                      })}
                  </TagList>
                </ListItem>
              );
            })}
          </List>
        </BookmarkContainer>
      </BookWrap>
    </div >
  )
}

const BookWrap = styled.div`
    width: 100vw;
    height: 100vh;
    background: #eaeaea;
    margin-top:50px;
`;

const BookmarkContainer = styled.div`
    margin: 0 auto;
    width: 70%;
    padding: 30px 0;
    p{
        width: 100%;
        font-size: 1.25rem;
        font-weight: bold;
        color: #000;
    }
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  width: 25%;
  margin: 0 5px;

  li {
    display:flex;
    flex-direction: column;
    width: 100%;
  }
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  cursor: pointer;
  margin-right:5px;

  img {
    width: 100%;
    height: 100%;
    margin-right: 20px;
    border: 1px solid #e1e2e3;
    border-radius: 5px;
  }

  div {
      width: 90%;
      align-items:center;

    h3 {
      margin-bottom: 8px;
      font-size: 18px;
      font-weight: 700;
      line-height: 22px;
    }

    p {
      margin-bottom: 10px;
      font-size: 15px;
      font-weight: 700;
      line-height: 22px;
    }

    span {
      display: block;
      font-size: 14px;
      line-height: 15px;
      color: #999;
    }
  }

  div:nth-child(3) {
    width: 124px;
    margin-left: 30px;

    p {
      padding: 0 10px;
      background-color: #e1e2e3;
      border-radius: 2px;
      font-size: 13px;
    }
  }
`;

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  height: min-content;
  padding-left: 20px;

  & > li {
    width: fit-content;
    height: fit-content;
    margin: 0 5px 5px 0;
    padding: 5px 10px;
    background-color: #e1e2e380;
    border-radius: 12px;
    font-size: 13px;
  }
`;

export default Bookmark
