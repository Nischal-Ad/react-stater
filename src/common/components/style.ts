import styled from 'styled-components'

export const Loader = styled.div`
  display: grid;
  place-items: center;
  margin: 1rem 0;

  .loader {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: inline-block;
    border-top: 4px solid #00cbb8;
    border-right: 4px solid transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }
  .loader::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border-left: 4px solid #080c59;
    border-bottom: 4px solid transparent;
    animation: rotation 0.5s linear infinite reverse;
  }
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
