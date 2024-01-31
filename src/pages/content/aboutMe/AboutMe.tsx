import tw from 'tailwind-styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

import myImgIm from '../../../assets/images/jieun_im1.webp';
import myImgImOn from '../../../assets/images/jieun_im2.webp';
import StackIcon from '../../../components/atoms/tools/ToolIcon';
import { StackData } from '../../../data/introData';
import ReviewDetail from '../../detail/ReviewDetail';
import { RootState } from '../../../store';
import ShowReviewBtn from '../../../components/button/ShowReviewBtn';
import { positionActions } from '../../../store/position-slice';
import { isMobile } from '../../../utils/isMobile';
import ScrollAni from '../../../styles/ScrollAni';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import { TagTxt } from '../../../components/atoms/tag/TagTxt';
import BoldText from '../../../components/atoms/text/BoldText';
import PointText from '../../../components/atoms/text/PointText';

export const IntroComponent = tw.main`
  relative
  flex
  items-center
  flex-col
  justify-center
  bg-mainBlack
  px-10
  pt-10
  z-1
  max-lg:h-auto
  max-lg:py-20
`;

export const Content = tw.section`
  flex
  flex-col
  gap-20
  items-center
  text-mainGray
  items-center
  py-20
`;

export const SubJectTit = tw.h2`
  absolute
  top-10
  left-10
  text-superLightGray
  font-black
  text-6xl

  max-lg:flex-col 
  max-lg:static 
  max-lg:w-full
`;

export const Tit = tw.h3`
  text-4xl
  font-black
  text-superLightGray
  pb-[2rem]
`;

export const SubTit = tw.h5`
  text-2xl
  font-bold
  pb-6
`;

export const LeftWrap = tw.div`
  flex
  flex-col
  gap-10
  justify-center
  items-center
  flex-2
`;

export const RightWrap = tw.div`
  flex
  flex-col
  flex-1
  gap-20
`;

export const Img = tw.img`
  max-md:w-[60vw]
`;

export const FlexBox = tw.div`
  flex
  flex-col
  justify-center
  items-center
  gap-1
`;

export const MyMind = tw.div`
  flex
  flex-col
  gap-3
`;

export const MyMindTxt = tw.div`
  relative
  text-base
  mb-5
  bg-lightGray
  p-5
  rounded-tl-2xl
  rounded-tr-2xl  
  rounded-bl-2xl
`;

export const StackSpacing = tw.div`
  flex
  gap-3
`

export const Stacks = tw(StackSpacing)`
  w-full
  flex-col
`;

export const StackWrap = tw.div`
  grid 
  grid-cols-3 
  gap-4

  max-md:grid-cols-1  
`;

export const StackBox = tw.div`
`;

export const StackIcons = tw.div`
  grid
  grid-cols-4
  gap-1
  w-full
`;

const TagTxtWrap = tw.div`
  flex
  gap-1
`

function AboutMe() {
  const dispatch = useDispatch()
  const isModal = useSelector((state: RootState) => state.overlay.isOpen);
  const moScrollRef = useRef<HTMLDivElement>(null);
  const [isImgChange, setIsImgChange] = useState(false);

  const { scrollRef, scrollEl } = useScrollAnimation();

  const { scrollYProgress } = useScroll({
    target: moScrollRef,
    offset: ['0 1', `${isMobile ? '0.8 1' : '1 1'}`]
  });

  useTransform(scrollYProgress, (pos) => {
    return pos === 1 ?
      dispatch(positionActions.PositionStyle('relative')) :
      dispatch(positionActions.PositionStyle('sticky'))
  });

  const handelImgChange = () => {
    setIsImgChange(prev => !prev)
  };


  return (
    <motion.div ref={moScrollRef}>
      <IntroComponent id='aboutme'>

        {isModal && <ReviewDetail name='review' />}

        <SubJectTit>About me</SubJectTit>
        <ScrollAni className={`${scrollEl ? 'fadeAn fadeIn' : 'fadeOut'}`} ref={scrollRef}>
          <Content>
            <LeftWrap>
              <FlexBox>
                <Img src={isImgChange ? myImgImOn : myImgIm} loading='lazy' alt="이모지 이미지" />
                <TagTxtWrap>
                  <TagTxt>#역지사지</TagTxt>
                  <TagTxt>#메타인지</TagTxt>
                  <TagTxt>#피드백_수용</TagTxt>
                  <TagTxt>#끊임없는_배움</TagTxt>
                </TagTxtWrap>
              </FlexBox>
              <ShowReviewBtn handelImgChange={handelImgChange}>팀원 리뷰 보기</ShowReviewBtn>
            </LeftWrap>
            <RightWrap ref={scrollRef}>
              <MyMind>
                <Tit>Interview</Tit>
                <MyMindTxt>
                  <SubTit>Q. 프론트엔드로 전향한 이유?</SubTit>
                  5년간 웹 디자이너로 활동하면서 사용자에게 동적이고 편리한 화면을 제공하고자 프론트엔드 개발자로 전향을 결심하게 되었습니다.<br />
                  디자인 역량을 바탕으로 <PointText>사용자와 더 밀착된 상호작용</PointText> 가능한 프로젝트를 개발하고자 하는 목표와 함께<br />
                  React, Styled Components, Tailwind, Redux, Recoil 등 다양한 프레임워크와 라이브러리를 도입해 발전할 수 있는 새로운 도전에 나서고 있습니다.
                </MyMindTxt>

                <MyMindTxt>
                  <SubTit>Q. 일에 있어 가장 중요하게 생각하는 것이 있다면?</SubTit>
                  항상 <PointText>역지사지 마인드로 사용자 중심 개발을 추구합니다.</PointText> 직관적이고 친숙한 UI 제공과 Lighthouse를 활용해 성능 최적화에 신경쓰면서,<br />
                  다양한 사용자들이 편리하게 서비스를 이용 할 수 있도록 기여하고자 합니다.
                </MyMindTxt>

                <MyMindTxt>
                  <SubTit>Q. 자기계발을 위해 어떤 것들을 해왔는지?</SubTit>
                  지속적인 학습을 위해 스터디에 적극 참여하고, 다양한 강의를 수강하여 실무에 적용할 수 있는 지식을 쌓고 있습니다.<br />
                  더불어 <PointText>낯선 기술에도 포기 하지 않고 메타인지 방식을 활용</PointText>해 문제에 직면하여 팀원들과의 협업을 통해 더 나은 해결책을 찾고 배우려는 의지가 강합니다.<br />
                  <BoldText>열린 마음으로 피드백을 수용</BoldText>해 더 나은 서비스를 개발하기 위해 노력하며,
                  높은 의지와 열정으로 새로운 도전에  임할 준비가 되어 있습니다.
                </MyMindTxt>
              </MyMind>
            </RightWrap>


            <Stacks>
              <Tit>Skill & Tools</Tit>
              <StackWrap>
                {
                  //* key = 제목, stacks = 기술 스택
                  Object.entries(StackData.stack).map(([key, stacks], idx) => (
                    <StackBox key={idx}>
                      <SubTit>{key}</SubTit>
                      <StackIcons>
                        {stacks.map((stack) => (
                          <StackIcon key={stack} stack={stack} width={`w-[calc(100%-5%)]`} />
                        ))}
                      </StackIcons>
                    </StackBox>
                  ))
                }
              </StackWrap>
            </Stacks>
          </Content>

        </ScrollAni>
      </IntroComponent >
    </motion.div>

  );
}

export default AboutMe;
