import React from 'react'
import { Icon } from '../Icon'
import styled from 'styled-components'
import * as theme from '../../config/theme'

const Row = styled.div`
  margin-left: -15px;
  margin-right: -15px;

  &::before {
    content: ' ';
    display: table;
  }

  &::after {
    content: ' ';
    display: table;
    clear: both;
  }
`

const ColMd1 = styled.div`
  float: left;
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;

  @media (min-width: 992px) {
    width: 8.33333%;
  }

  @media (max-width: 991px) and (min-width: 768px) {
    display: none !important;
  }

  @media (max-width: 767px) {
    display: none !important;
  }
`

const ColMd11 = styled.div`
  float: left;
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;

  @media (min-width: 992px) {
    width: 91.66667%;
  }
`

const StyledContentBlock = styled(Row)`
  padding-top: 32px;

  &:last-of-type {
    margin-bottom: 32px;
  }

  svg {
    width: 60px;
    height: auto;

    path {
      fill: ${theme.themeBlack};
    }
  }
`

const ContentBlockHeading = styled.h2`
  font-weight: 300;
  margin-top: 0;
  font-family: ${theme.themeSansSerif};

  &::before {
    display: block;
    content: ' ';
    margin-top: -${theme.hashTagLinksPadding};
    height: ${theme.hashTagLinksPadding};
    visibility: hidden;
    pointer-events: none;
  }
`

const ContentBlockHtml = styled.div`
  font-family: ${theme.themeSerif};
  font-weight: 300;
  font-size: 16px; //@TODO: Maybe style the p, li etc
  position: relative;
  z-index: ${theme.zIndex_1};

  h1,
  h2,
  h3 {
    margin-top: 0;
    font-family: ${theme.themeSansSerif};
  }

  ul em {
    font-size: 85%;
    display: block;
  }

  li {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`

const ContentBlock = ({ data, icon, slug, title }) => {
  
  return (
  <StyledContentBlock>
    <ColMd1>
      <Icon name={icon} />
    </ColMd1>

    <ColMd11>
      <ContentBlockHeading id={slug}>{title}</ContentBlockHeading>

      <ContentBlockHtml
        dangerouslySetInnerHTML={{
          __html: data.childMarkdownRemark.html,
        }}
      />
    </ColMd11>
  </StyledContentBlock>
)}

export default ContentBlock
