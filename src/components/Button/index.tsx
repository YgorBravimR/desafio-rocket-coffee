import { ButtonContainer } from "./styles";
import arrowRight from '../../assets/arrow.svg'

export function Button() {
  return (
    <ButtonContainer>
      Pegar meu café
      <img src={arrowRight} alt="" />
    </ButtonContainer>
  )
}