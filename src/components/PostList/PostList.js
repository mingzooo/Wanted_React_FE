import React from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';

import PostCard from './PostCard/PostCard';

function PostList(props) {
  const history = useHistory();
  return (
    <PostCaradList>
      {props.data.map((post, index) => (
        <li
          key={index}
          onClick={() => {
            history.push(`/jobpostings/${post.id}`);
          }}
        >
          <PostCard list={post} />
        </li>
      ))}
    </PostCaradList>
  );
}

export default PostList;

const PostCaradList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  width: 1100px;
  margin: 0 auto;
  row-gap: 10px;

  & li {
    ${({ theme }) => theme.setFlex()}
    flex-direction: column;
    height: 334px;
    width: 270px;
    overflow: hidden;
  }
`;
