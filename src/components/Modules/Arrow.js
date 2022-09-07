import styled, { css, keyframes } from 'styled-components';

const Wrapper = styled.div`
  .arrow {
    position: relative;
    padding: 1.0rem;
    display: block;
}
.arrow::before {
    content: '';
    position: absolute;
    top: 50%;
    right: 1.0rem;
    margin-top: -5px;
    width: 10px;
    height: 10px;
    border: 0px;
    border-top: solid 2px #ccc;
    border-right: solid 2px #ccc;
    transform: rotate(45deg);
}
`

export default function Arrow() {
    return (
      <Wrapper>
        <div className="arrow"></div>
        </Wrapper>
    )
}