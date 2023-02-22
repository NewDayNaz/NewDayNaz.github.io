import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import styled from "styled-components";
// Data
import { Blog } from "../data";
// Icons
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const StyledSocialLinks = styled.div`
  a {
    margin: 0 1rem;
  }
`;

export default function SocialLinks() {
  const { blog } = useSelector(selectData);

  return (
    <StyledSocialLinks>
      <a
        href="https://www.facebook.com/newdaynaz/"
        aria-label="Check out our facebook"
        className="link-icons"
      >
        <FaFacebook />
      </a>
      <a
        href="https://www.instagram.com/newdaynaz/"
        aria-label="Check out our instagram"
        className="link-icons"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.youtube.com/@newdaychurchofthenaz7033/streams"
        aria-label="Check out our youtube"
        className="link-icons"
      >
        <FaYoutube />
      </a>
    </StyledSocialLinks>
  );
}
