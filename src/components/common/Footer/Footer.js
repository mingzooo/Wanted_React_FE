import styled from 'styled-components';
import React from 'react'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <TopFooter>
                    <img src="https://s3.ap-northeast-2.amazonaws.com/static.wanted.co.kr/images/logo_wanted_black.png" />
                    <ul>
                        {FOOTER_INFO.map((el, idx) => (
                            <li key={idx}>{el}</li>
                        ))}
                    </ul>
                    <Sns>
                        <ul>
                            {SNS_IMG.map((el, idx) => (
                                <img key={idx} src={el} />
                            ))}
                        </ul>
                    </Sns>
                </TopFooter>
                <BottomFooter>
                    <InnerText>
                        <p>
                            (주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로
                            300 | 통신판매번호 : 2020-서울송파-3147 <br />
                            유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 |
                            (국외) 서울동부-유-2020-2 | 사업자등록번호 : 299-86-00021 | 02-539-7118<br />©
                            Wantedlab, Inc.
                        </p>
                    </InnerText>
                    <SelectWrapper>
                        <KoreaImg src="https://s3.ap-northeast-2.amazonaws.com/wanted-public/ico_KR.svg" />
                        <CountrySelector>
                            {COUNTRY_WRAPPER.map((el, idx) => (
                                <option key={idx} value={el}>
                                    {el}
                                </option>
                            ))}
                        </CountrySelector>
                    </SelectWrapper>
                </BottomFooter>
            </FooterContent>
        </FooterContainer>
    )
}

const FOOTER_INFO = ['기업소개', '이용약관', '개인정보 처리방침', '고객센터'];

const SNS_IMG = [
    'https://s3.ap-northeast-2.amazonaws.com/static.wanted.co.kr/images/social_instagram.png',
    'https://s3.ap-northeast-2.amazonaws.com/static.wanted.co.kr/images/social_youtube.png',
    'https://s3.ap-northeast-2.amazonaws.com/static.wanted.co.kr/images/social_facebook.png',
    'https://s3.ap-northeast-2.amazonaws.com/static.wanted.co.kr/images/social_blog.png',
    'https://s3.ap-northeast-2.amazonaws.com/static.wanted.co.kr/images/social_kakao.png',
    'https://s3.ap-northeast-2.amazonaws.com/static.wanted.co.kr/images/social_post.png',
    'https://s3.ap-northeast-2.amazonaws.com/static.wanted.co.kr/images/social_apple.png',
    'https://s3.ap-northeast-2.amazonaws.com/static.wanted.co.kr/images/social_google.png',
];

const COUNTRY_WRAPPER = [
    '한국 (한국어)',
    '日本 (日本語)',
    '台灣 (繁體中文)',
    'Worldwide (English)',
    'Singapore (English)',
];

const FooterContainer = styled.div`
  display: flex;
  background-color: inherit;
  color: #3A3A3A;
  font-size: 15px;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction:column;
  width: 70%;
  margin: 0 auto;
  height: 30vh;
`;

const TopFooter = styled.div`
    display:flex;
    width:100%;
    height: 30%;
    display-flex:row;
    align-items: center;
    justify-content:space-between;
    border-bottom: solid 1px #717171;
    img {
        width:8rem;
        height:70%;
      }
      ul {
        display: flex;
        li {
          margin-right: 3rem;
        }
      }
`;

const Sns = styled.div`
    height:100%;
    width:22%;
    display:flex;
    align-items: center;
    ul{
        margin-left:auto;
        display:flex;
        flex-direction:row;
        height:40%;
        width:100%;
        img{
            display:flex;
            margin-right:0.8rem;
            cursor: pointer;
        }
    }
`;

const BottomFooter = styled.div`
    width:100%;
    height:30%;
    margin: 1.3rem 0;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`;

const InnerText = styled.div`
    display: flex;
    width: 70%;
    line-height: 1.66667em;
    font-size: 12px;
`;

const SelectWrapper = styled.div`
    position:relative;
    margin-right:1rem;
`;

const KoreaImg = styled.img`
  width: 20px;
  height: 14px;
  position: absolute;
  top: 12px;
  left: 18px;
`;

const CountrySelector = styled.select`
  width: 250px;
  height: 2.5rem;
  padding: 8px 45px;
  background-color: #F2F4F7;
  color: #3A3A3A;
  border: none;
  border-radius:5px;
  outline: none;
`;


export default Footer