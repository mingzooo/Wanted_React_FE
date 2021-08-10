import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function SearchListModal({ postingInfo }) {
  return (
    <section>
      <div>
        <ListContainer>
          {postingInfo?.companies.map(company => (
            <Link to={`/search?query=${company.name}`}>
              <List>
                <p>{company.name}</p>
              </List>
            </Link>
          ))}
          {postingInfo?.jobPostings.map(posting => (
            <Link to={`/search?query=${posting.title}`}>
              <List>
                <p>{posting.title}</p>
              </List>
            </Link>
          ))}
          {postingInfo?.tags.map(tag => (
            <Link to={`/tag-search?tag=${tag.name}`}>
              <List>
                <p>#{tag.name}</p>
              </List>
            </Link>
          ))}
        </ListContainer>
      </div>
    </section>
  );
}

export default SearchListModal;

const ListContainer = styled.ul`
  margin: auto;
  width: 1000px;
  padding: 15px;

  a {
    text-decoration: none;
    color: black;
  }
`;

const List = styled.li`
  ${({ theme }) => theme.setFlex}
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
    margin-right: 14px;
  }
`;
