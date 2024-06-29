import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterContainer>
      <FooterTop>
        <FooterButton onClick={() => window.scrollTo(0, 0)}>Back to top</FooterButton>
      </FooterTop>
      <FooterContent>
        <FooterRow>
          <FooterColumn>
            <FooterTitle>Get to Know Us</FooterTitle>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
            <FooterLink href="#">About Amazon</FooterLink>
            <FooterLink href="#">Investor Relations</FooterLink>
            <FooterLink href="#">Amazon Devices</FooterLink>
          </FooterColumn>
          <FooterColumn>
            <FooterTitle>Make Money with Us</FooterTitle>
            <FooterLink href="#">Sell on Amazon</FooterLink>
            <FooterLink href="#">Sell Your Services on Amazon</FooterLink>
            <FooterLink href="#">Sell on Amazon Business</FooterLink>
            <FooterLink href="#">Sell Your Apps on Amazon</FooterLink>
            <FooterLink href="#">Become an Affiliate</FooterLink>
            <FooterLink href="#">Advertise Your Products</FooterLink>
            <FooterLink href="#">Self-Publish with Us</FooterLink>
            <FooterLink href="#">Host an Amazon Hub</FooterLink>
          </FooterColumn>
          <FooterColumn>
            <FooterTitle>Amazon Payment Products</FooterTitle>
            <FooterLink href="#">Amazon Rewards Visa Signature Cards</FooterLink>
            <FooterLink href="#">Amazon.com Store Card</FooterLink>
            <FooterLink href="#">Amazon Business Card</FooterLink>
            <FooterLink href="#">Amazon Business Line of Credit</FooterLink>
            <FooterLink href="#">Shop with Points</FooterLink>
            <FooterLink href="#">Credit Card Marketplace</FooterLink>
            <FooterLink href="#">Reload Your Balance</FooterLink>
            <FooterLink href="#">Amazon Currency Converter</FooterLink>
          </FooterColumn>
          <FooterColumn>
            <FooterTitle>Let Us Help You</FooterTitle>
            <FooterLink href="#">Amazon and COVID-19</FooterLink>
            <FooterLink href="#">Your Account</FooterLink>
            <FooterLink href="#">Your Orders</FooterLink>
            <FooterLink href="#">Shipping Rates & Policies</FooterLink>
            <FooterLink href="#">Amazon Prime</FooterLink>
            <FooterLink href="#">Returns & Replacements</FooterLink>
            <FooterLink href="#">Manage Your Content and Devices</FooterLink>
            <FooterLink href="#">Amazon Assistant</FooterLink>
            <FooterLink href="#">Help</FooterLink>
          </FooterColumn>
        </FooterRow>
      </FooterContent>
      <FooterBottom>
        <FooterRow>
          <FooterBottomLink href="#">Conditions of Use</FooterBottomLink>
          <FooterBottomLink href="#">Privacy Notice</FooterBottomLink>
          <FooterBottomLink href="#">Interest-Based Ads</FooterBottomLink>
          <FooterBottomText>© 2024, YourCompanyName.com, Inc. or its affiliates</FooterBottomText>
        </FooterRow>
      </FooterBottom>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  background-color: #232f3e;
  color: white;
  padding: 20px;
  font-size: 14px;
`;

const FooterTop = styled.div`
  text-align: center;
  padding: 10px;
  margin:1px
`;

const FooterButton = styled.button`
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  text-decoration: underline;
  
  &:hover {
    text-decoration: none;
  }
`;

const FooterContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px 0;
`;

const FooterRow = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const FooterColumn = styled.div`
  flex: 1;
  padding: 20px;
  min-width: 200px;
`;

const FooterTitle = styled.h3`
  margin-bottom: 10px;
`;

const FooterLink = styled.a`
  display: block;
  color: white;
  text-decoration: none;
  margin-bottom: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #3a4553;
  padding: 20px 0;
`;

const FooterBottomLink = styled.a`
  color: white;
  margin: 0 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterBottomText = styled.span`
  margin-left: 10px;
`;

export default Footer;
