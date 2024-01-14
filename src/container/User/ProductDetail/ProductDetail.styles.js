import styled from "styled-components";
import defaultAvatar from "../../../assets/images/backgroundetail.png";
export default styled.div`
  .list-header {
    background-image: url("${({ src }) => src || defaultAvatar}");
    background-color: linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5));
    height: 260px;
    display:flex;
    align-items:center;
    justify-content:center ;
    position:relative;
    flex-direction: column ;
  }
`;