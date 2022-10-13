import React from "react";
import * as S from "./style"
import InfoCard from "../../components/InfoCard";
import LoginCard from "../../components/LoginCard";

const Login = () => {
  return (
    <>
      <S.LoginContainer>
        <LoginCard />
        <InfoCard />
      </S.LoginContainer>
    </>
  );
};

export default Login;
