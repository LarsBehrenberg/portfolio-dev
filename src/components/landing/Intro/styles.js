import styled from 'styled-components';
import overlayIllustration from 'assets/illustrations/overlay.svg';
import devBlue from 'assets/illustrations/dev-blue.svg'

export const Wrapper = styled.div`
  background-image: url(${overlayIllustration});
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;

  @media (max-width: 480px) {
    background-image: none;
  }
`;

export const IntroWrapper = styled.div`
  padding: 4.6rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 480px) {
    flex-direction: column;
    background-image: url(${devBlue});
    background-size: contain;
    background-position: right top;
    background-repeat: no-repeat;
  }
 @media (min-width: 768px) and (max-width: 1024px) {
    padding: 1rem 0;
 } 
`;

export const Details = styled.div`
  flex: 1;

  @media (max-width: 480px) {
    margin-top: 6rem;
    width: 100%;
    margin-bottom: 0rem;
    text-align: right;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 36pt;
    color: #212121;

    @media (max-width: 680px) {
      font-size: 30pt;
    }
  }

  h4 {
    margin-bottom: 3rem;
    font-size: 32pt;
    font-weight: normal;
    color: #707070;

    @media (max-width: 680px) {
      font-size: 26pt;
    }
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 480px) {
    width: 100%;
    display: none !important
  }

  img {
    width: 100%;
  }
`;
