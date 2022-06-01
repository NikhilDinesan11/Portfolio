import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
     <LinkList>
       <LinkColumn>
         <LinkTitle>Call</LinkTitle>
         <LinkItem href="tel: 111-111-1111"> +91 8826824498</LinkItem>
       </LinkColumn>
       <LinkColumn>
         <LinkTitle>Email</LinkTitle>
         <LinkItem href="mailto:nikhildinesan@gmail.com"> nikhildinesan@gmail.com</LinkItem>
       </LinkColumn>
     </LinkList>
    <CompanyContainer>
    <SocialContainer>
    <SocialIcons href="https://github.com/NikhilDinesan11">
        <AiFillGithub size="3rem">
        </AiFillGithub>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/nikhil-dinesan-282b97175/">
        <AiFillLinkedin size="3rem">
        </AiFillLinkedin>
      </SocialIcons>
      </SocialContainer>
    </CompanyContainer>
   </FooterWrapper>
  );
};

export default Footer;
