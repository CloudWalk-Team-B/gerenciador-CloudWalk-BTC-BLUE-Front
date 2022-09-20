import * as S from "./style";
import InfoCard from "../../components/InfoCard";
import LoginCard from "../../components/LoginCard";

const Login = () => {
  return (
    <S.LoginConstainer>
      <LoginCard />
      <InfoCard />
    </S.LoginConstainer>
  );
};

export default Login;
