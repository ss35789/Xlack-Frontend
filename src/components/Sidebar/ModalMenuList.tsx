import styled from "styled-components";
import React, { useState } from "react";

function ModalMenuList() {
  const [isHovering, setIsHovering] = useState(0);
  return (
    <MenuList>
      <div>
        <Button>프로필</Button>
        <Separator>
          <hr />
        </Separator>
      </div>
      <div>
        <Button>upgrade option</Button>
        <Separator>
          <hr />
        </Separator>
      </div>
      <div>
        <Button>채널에 사용자 초대</Button>
        <Button>채널 새성</Button>
        <Separator>
          <hr />
        </Separator>
      </div>
      <div>
        <Button>환경설정</Button>
        <Button>설정 및 관리</Button>
        <Separator>
          <hr />
        </Separator>
      </div>
      <div>
        <Button>도구</Button>
        <Separator>
          <hr />
        </Separator>
      </div>
      <div>
        <Button
          onMouseOver={() => setIsHovering(1)}
          onMouseOut={() => setIsHovering(0)}
        >
          워크스페이스 추가
        </Button>
        {isHovering ? <Sub className="as">asd</Sub> : null}
        <Separator>
          <hr />
        </Separator>
      </div>
      <div>
        <Button>데스크톱 앱 열기</Button>
        <Button>모바일앱 받기</Button>
        <Separator>
          <hr />
        </Separator>
      </div>
      <div>
        <Button>모바일에서 채널에 로그인하기</Button>
        <Button>채널에서 로그아웃 </Button>
        <Separator>
          <hr />
        </Separator>
      </div>
    </MenuList>
  );
}
const Separator = styled.div`
  padding: 8px;
`;
const MenuList = styled.menu`
  padding-left: 0px;
  //width: 300px;
  //height: 577px;
`;

const SubMenu = styled.div`
  padding-left: 0px;
`;
const Button = styled.div`
  display: block;
`;
const Sub = styled.div`
  left: 352px;
  top: 240px;
  width: 380px;
  height: 140px;
  //align-items: center;
  //justify-content: center;
  position: absolute;
`;
export default ModalMenuList;
