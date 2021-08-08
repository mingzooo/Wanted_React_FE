import styled from "styled-components";
import { useEffect, useRef } from "react";
import { EXPLORE_CONTENT } from "../../../data/dropdownData";
import { ArrowIosForwardOutline } from "@styled-icons/evaicons-outline";
import ExploreEachLists from "./ExploreEachList";

const MenuOverlay = ({ opened, onCloseOverlay }) => {
    const ref = useRef();

    useEffect(() => {
        ref.current.addEventListener("mouseleave", onCloseOverlay);
    }, [ref]);

    return (
        <ExploreContent
            opened={opened}
            ref={ref}
        >
            <ExploreContainer>
                {EXPLORE_CONTENT.map((el) => (
                    <ExploreEachLists
                        key={el.id}
                        title={el.category}
                        subcategory={el.name}
                    />
                ))}
            </ExploreContainer>
        </ExploreContent>
    );
};



const ExploreContent = styled.div`
  width: 100%;
  max-height: ${(props) => (props.opened ? '2000px' : '0px')};
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  overflow: hidden;
  transition: ${(props) =>
        props.opened ? 'max-height 0.8s ease-in-out' : 'none'};
    z-index:3;
`;

const ExploreContainer = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  max-width: 1060px;
  margin: 0 auto;

  div:nth-child(2) {
    padding-top: 71.8px;
  }

  div:last-child {
    margin-bottom: 20px;
  }
`;


export default MenuOverlay;