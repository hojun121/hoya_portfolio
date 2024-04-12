export const project8 = {
  name: 'ssthing',
  pointcolor: 'before:bg-[#373737]',
  title: '우주를 테마로 한 회사 소개 사이트',
  subtext:
    '우주를 테마로 한 회사 소개 홈페이지입니다.\n디자인 시안을 Figma로 확인하며 제시한 기한 내에 최대한 클라이언트가 요구한 기능을 작업하려고 했습니다.',
  data: '2023.10 - 약 3일',
  team: '2인 (프론트엔드 2명)',
  tag: ['팀', '외주', '반응형', '퍼블리싱'],
  depoloyurl: 'https://ssting.io/',
  tools: [
    {
      title: 'React',
      detail:
        'React는 컴포넌트 기반으로 하며, 가상 DOM을 활용해 웹 애플리케이션의 성능을 최적화 합니다. 컴포넌트 재사용성을 높이고, 상태 관리를 용이하게 할 수 있습니다.',
    },
    {
      title: 'TypeScript',
      detail:
        'TypeScript는 정적 타입을 지원하는 JavaScript 슈퍼셋 언어로, 코드를 실행하기 전 오류를 잡아 줄 수 있습니다.',
    },
    {
      title: 'Styled Components',
      detail:
        'Styled Components는 JavaScript 코드 내에서 CSS를 작성할 수 있게 해주는 라이브러리입니다. 컴포넌트와 스타일을 함께 정의해 컴포넌트 별로 스타일을 관리하고 재사용할 수 있습니다.',
    },
  ],
  featinfo: [
    '3일이라는 짧은 기간내에 구현',
    '우주를 컨셉으로한 홈페이지로 이미지 요소가 많음',
    '네비게이션 메뉴 클릭 시 메인 화면에서 특정 위치로 부드럽게 이동',
    'localStorage를 활용해 서브 페이지에서도 네비게이션 메뉴 클릭 시 메인 화면의 특정 위치로 이동',
  ],
  parts: [
    {
      title: 'header navigation - localStorage를 활용한 특정 위치 저장',
      detail1: [
        `각 메뉴 클릭 시 메인 화면 특정 영역으로 부드럽게 이동 되도록 \`useRef\`를 활용해 구현`,
        `서브 페이지에서도 해당 메뉴 클릭 시 메인 페이지 특정 위치로 자동 이동 되도록 상태 관리 라이브러리 없이 \`localStorage\`에 위치를 저장하도록 작업`,
        `**불필요한 저장을 막기 위해** \`setTimeout\` 메서드를 활용해 특정 위치에 도달한 후 지정된 시간이 지나면 자동으로 해당 위치 정보를 삭제하도록 조치`,
      ],
    },
    {
      title: '이미지 요소가 많은 페이지에서 이미지 최적화 작업 진행',
      detail1: [
        `이미지 요소가 많은 웹 사이트로 일러스트 요소는 디자이너에게 재요청 진행`,
        `수정가능한 이미지는 확장자를 \`webp\`로 변경하여 **용량 감소** 진행`,
        `**초기 로딩 속도**와 **사용자 경험**을 향상`,
      ],
    },
    {
      title: '웹 표준 / 접근성 고려 및 인터랙션 작업',
      detail1: [
        `디자인된 웹 페이지를 마크업하여 웹 표준을 준수하고 웹 접근성을 고려하여 프로젝트 진행`,
        `각 섹션을 팀원과 협업해 PC 부터 Mobile까지 고려한 반응형 웹으로 개발`,
        `디자이너가 요구한 디자인 시안을 \`Figma\`를 통해 정확히 이해하고, 섬세한 배경 위치 조절을 통해 완성도 높은 디자인 구현`,
      ],
    },
  ],
  trouble: [
    {
      title: '서브 페이지에서 navigation 클릭 시 메인 화면 특정 영역으로 이동 해야하는 점',
      detail1: [
        `**[문제점]** navigation은 메인, 서브 페이지 공통으로 사용 중으로 서브 페이지에서 메인 화면의 특정 영역으로 이동할 수 있도록 요구사항을 받았으며, 단기 프로젝트로 상태 관리 라이브러리를 사용하지 않고 있었습니다.`,
        `**[해결]** \`localStorage\`를 활용해 특정 영역의 \`id\`값을 저장하고, 이동된 후 저장된 값을 \`setTimeout\` 메서드를 활용해 특정 영역 도착 후 삭제 되도록 작업해 불필요한 저장 공간 사용을 막았습니다.`,
      ],
    },
    {
      title: '초기 로딩 속도 개선하기 위한 이미지 작업',
      detail1: [
        `**[문제점]** 이미지 요소가 많아 초기 로딩 속도가 느렸습니다.`,
        `**[해결]** 변경하기 어려운 일려스트 요소는 디자이너에게 재요청하고, 변환 가능한 경우 확장자를 **\`webp\`로 변환 및 용량 감소**를 통해 초기 로딩 속도를 개선할 수 있었습니다.`,
        `**[회고]** 마무리된 프로젝트지만 img 태그에 \`loading="lazy"\`속성과 \`placeholder\`를 이미지 최적화를 진행했을 것 같습니다.`,
      ],
    },
  ],
};
