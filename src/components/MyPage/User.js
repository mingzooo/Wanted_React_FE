import { useHistory } from 'react-router-dom'
import styled from 'styled-components';
import USERDATA from '../../data/UserData';

const User = () => {
  const history = useHistory();

  const userBookMark = USERDATA.bookmarkList;
  const applyStatus = USERDATA.applyStatus;

  const goToDetail = () => {
    history.push(`/detail`); //나중에 개별로 id로 push 해주기
    window.scrollTo(0, 0);
  };

  return (
    <UserDataContainer>
      <ApplicationStatus>
        <Title>지원 현황</Title>
        <ul>
          <li>
            <em>{applyStatus && applyStatus.stepOne}</em>
            <span>지원 완료</span>
          </li>
          <li>
            <em>{applyStatus && applyStatus.stepTwo}</em>
            <span>서류 통과</span>
          </li>
          <li>
            <em>{applyStatus && applyStatus.stepThree}</em>
            <span>최종 합격</span>
          </li>
          <li>
            <em>{applyStatus && applyStatus.stepFour}</em>
            <span>불합격</span>
          </li>
        </ul>
      </ApplicationStatus>
      <BookMark>
        <Title>원티드 추천 포지션</Title>
        <List>
          {userBookMark.map(item => {
            return (
              <ListItem id={item.id} oneLine onClick={() => goToDetail()}>
                <img src={item.image} alt="company logo" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.company}</p>
                  <span>
                    {item.city} . {item.state}
                  </span>
                </div>
              </ListItem>
            );
          })}
        </List>
      </BookMark>
    </UserDataContainer>
  );
};

const UserDataContainer = styled.div`
  width: 70%;;
`;

const ApplicationStatus = styled.div`
  background: white;
  width: 100%;
  margin-bottom: 20px;
  padding: 26px 0 34px;
  border-radius: 5px;

  h2 {
    padding-bottom: 30px;
  }

  ul {
    display: flex;
    justify-content: center;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 25%;
      border-right: 1px solid #e1e2e3;

      &:last-child {
        border-right: none;
      }

      em {
        padding-bottom: 11px;
        font-weight: 400;
        font-size: 36px;
        line-height: 1;
      }

      span {
        font-size: 16px;
        line-height: 19px;
      }
    }
  }
`;

const BookMark = styled.div`
  background: white;
  padding: 26px 0 34px;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;
  width: 100%;
  height: fit-content;
`;


const Title = styled.h2`
  padding: 0 32px 10px;
  font-size: 18px;
  font-weight: 700;
`;


const List = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
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
    height: 50%;
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


export default User;
