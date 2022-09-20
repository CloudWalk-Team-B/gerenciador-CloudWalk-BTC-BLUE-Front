import { LoginContainer } from "./style";
import InfoCard from "../../components/InfoCard";
import LoginCard from "../../components/LoginCard";

const Login = () => {
  return (
    <>
      <LoginContainer>
        <LoginCard />
        <InfoCard />
      </LoginContainer>
    </>
  );
};

export default Login;
