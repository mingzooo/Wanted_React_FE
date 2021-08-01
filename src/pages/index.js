import styled from "styled-components"
import { TextMiddle, PageWrap } from "../components/common/styled";
import Header from "../components/common/header";
import Footer from '../components/common/Footer/Footer';

const IndexPage = () => {
    return (
        <>
            <PageWrap>
                <Header page="index" />
                <IndexText>wanted 비로그인시 페이지</IndexText>
            </PageWrap>
            <Footer />
        </>
    )
}

const IndexText = styled(TextMiddle)`
    font-size:30px;
    font-weight:600;
`;

export default IndexPage