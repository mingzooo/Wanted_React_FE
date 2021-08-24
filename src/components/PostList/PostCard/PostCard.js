import React from 'react';

import styled from 'styled-components';

function PostCard({ list }) {
  const { company, title, imageUrl, id } = list;
  return (
    <>
      <div>
        <PostImage alt="company" src={imageUrl} />
      </div>
      <CompanySummery>
        <h2>
          {title}
          {id}
        </h2>
        <p>{company.name}</p>
        <Text color="gray">{company.region}</Text>
        <Text color="gray">1,000,000원</Text>
      </CompanySummery>
    </>
  );
}

export default PostCard;

const PostImage = styled.img`
  width: 250px;
  height: 187.5px;
  border-radius: 2.5%;
`;

const CompanySummery = styled.summary`
  ${({ theme }) => theme.setFlex('space-around', 'flex-start')}
  flex-direction: column;
  width: 90%;
  height: 90px;
  margin-top: 15px;
  margin-left: 20px;

  & h2 {
    font-size: 18px;
    font-weight: bold;
  }
`;

const Text = styled.p`
  color: ${props => props.color};
`;
