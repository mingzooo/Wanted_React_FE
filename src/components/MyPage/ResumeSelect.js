import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { RiPagesLine } from 'react-icons/ri';

const ResumeSelectModal = ({ }) => {
  return (
    <ModalContainer>
      <Modal>
        <header>
          <h2>기본 이력서 선택</h2>
          <FaTimes className="closeIcon" />
        </header>
        <ModalBody>
          <ul>
            <li>
              <div>
                <RiPagesLine className="resumeIcon" />
                <p>박민주 1</p>
              </div>
            </li>
            <li>
              <div>
                <RiPagesLine className="resumeIcon" />
                <p>resume 2</p>
              </div>
            </li>
          </ul>
        </ModalBody>
        <ModalFooter>
          <button>선택 완료</button>
        </ModalFooter>
      </Modal>
    </ModalContainer>
  );
};

const ModalFooter = styled.div`
  height: 66px;
  padding: 10px;

  button {
    width: 100%;
    height: 100%;
    padding: 10px 0;
    border: none;
    border-radius: 3px;
    background-color: #258bf7;
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    cursor: pointer;
    outline: none;
  }
`;

const ModalBody = styled.div`
  /* background-color: skyblue; */
  width: 100%;
  height: 430px;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #00000090;
  width: 100%;
  height: 100vh;
  z-index: 2000;

  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;

    li {
      width: 50%;
      height: 240px;
      padding: 10px;
      line-height: 240px;
      text-align: center;
      cursor: pointer;

      div {
        position: relative;
        height: 100%;
        border: 1px solid #e4e4e4;
        border-radius: 3px;

        .resumeIcon {
          width: 80px;
          height: 80px;
          color: #8e8e8e;
        }

        p {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 50px;
          border-top: 1px solid #e4e4e4;
          font-size: 18px;
          line-height: 50px;
          font-weight: 600;
        }
      }
    }
  }
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 550px;
  border-radius: 5px;
  background-color: white;
  z-index: 3000;
  overflow: hidden;

  header {
    position: relative;

    h2 {
      height: 54px;
      padding: 16px 20px;
      position: relative;
      border-bottom: 1px solid #eee;
      color: #333;
      text-align: center;
      line-height: 25px;
      font-size: 16px;
      font-weight: 600;
    }

    .closeIcon {
      position: absolute;
      top: 17px;
      right: 17px;
      width: 20px;
      height: 20px;
      color: rgb(153, 153, 153);
      cursor: pointer;
    }
  }
`;

export default ResumeSelectModal;
