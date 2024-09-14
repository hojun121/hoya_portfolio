import tw from "tailwind-styled-components";
import PointText from "../atoms/text/PointText";
import BoldText from "../atoms/text/BoldText";

const RightContainer = tw.div`
  flex
  flex-col
  flex-1
  gap-20
`;

const Tit = tw.h3`
  text-4xl
  font-black
  text-superLightGray
  pb-[2rem]
`;

const SubTit = tw.h5`
  text-2xl
  font-bold
  pb-6
`;

const MyMind = tw.div`
  flex
  flex-col
  gap-3
`;

const MyMindTxt = tw.div`
  relative
  text-base
  mb-5
  bg-lightGray
  p-5
  rounded-tl-2xl
  rounded-tr-2xl  
  rounded-bl-2xl
`;

const InterviewWrap = () => {
  return (
    <RightContainer>
      <MyMind>
        <Tit>Interview</Tit>
        <MyMindTxt>
          <SubTit>Q. 배우가 된 계기는 무엇인가요?</SubTit>
          어릴 적부터 연기에 대한 열정이 있었습니다. 무대 위에서 표현하는 감정과 스토리에 매료되었고, 다양한 인물들을 연기하면서 인간에 대한 이해를 깊게 하고 싶었습니다.<br />
          <PointText>다양한 역할을 통해</PointText> 사람들의 감정을 전하고, 그들과 소통하는 것이 저에게 가장 큰 매력이었습니다. 그래서 배우의 길을 선택하게 되었습니다.
        </MyMindTxt>

        <MyMindTxt>
          <SubTit>Q. 연기를 하면서 가장 중요하게 생각하는 것은 무엇인가요?</SubTit>
          가장 중요하게 생각하는 것은 <PointText>진정성</PointText>입니다. 캐릭터를 연기할 때 단순히 대사를 외우는 것이 아니라, 그 인물의 삶을 살아가듯이 몰입하는 것이 중요하다고 생각합니다.<br />
          또한, <PointText>관객과의 연결</PointText>을 항상 염두에 두고 연기합니다. 내가 느끼는 감정이 관객에게도 진심으로 전달되도록 노력합니다.
        </MyMindTxt>

        <MyMindTxt>
          <SubTit>Q. 자기계발을 위해 어떤 노력을 하고 있나요?</SubTit>
          꾸준한 연습과 학습을 통해 성장하려고 노력하고 있습니다. <PointText>다양한 감독과 배우들과의 협업을 통해</PointText> 새로운 연기 스타일을 배우고, <BoldText>다양한 장르에 도전</BoldText>하면서 연기 스펙트럼을 넓히고 있습니다.<br />
          또한, <PointText>피드백을 통해</PointText> 더 나은 배우로 발전하기 위해 항상 열린 마음을 유지하고 있습니다.
        </MyMindTxt>
      </MyMind>
    </RightContainer>
  );
};

export default InterviewWrap;