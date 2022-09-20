import InfoCard from "../../components/InfoCard";
import LoginCard from "../../components/LoginCard";
import * as S from "./style";

const Login = () => {
  return (
    <S.LoginConstainer>
      <LoginCard />
      <InfoCard />
    </S.LoginConstainer>
  );
};

export default Login;
