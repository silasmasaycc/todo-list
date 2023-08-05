import { HeaderContainer, HeaderTitle } from "./styles";
import logo from '../../assets/rocket.svg';


export default function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <HeaderTitle variant="blue-500">to</HeaderTitle>
      <HeaderTitle variant="purple-700">do</HeaderTitle>
    </HeaderContainer>
  )
}