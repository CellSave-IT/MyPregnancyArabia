import styled from '@emotion/styled'

export const StyleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const StyleCard = styled.div<any>`
  background: ${(props: any) => props.theme.colors.background500};
  width: 100%;
  position: relative;
  overflow: hidden;
  transition: all ease-in-out 2s;
  &:hover {
    .card-overlay {
      display: flex;
    }
    img {
      transform: scale(1.1);
    }
  }
  cursor: pointer;
  ${(props: any) => props.styleCard}
`
export const StyleOverlay = styled.div<any>`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  display: none;
`
export const StyleOverlayText = styled.h4<any>`
  font-size: 28px;
  font-family: ${(props: any) => props.theme.fontFamily.secondary};
  color: white;
  justify-content: flex-end;
  margin-top: auto;
  margin-bottom: 20%;
  @media (max-width: 1024px) {
    font-size: 24px;
  }
  @media (max-width: 767px) {
    font-size: 18px;
  }
`
