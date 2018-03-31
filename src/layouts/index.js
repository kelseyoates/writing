/* eslint no-unused-expressions:0 */

import React from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import SEO from '../components/SEO';
import theme from '../../config/Theme';
import { media } from '../utils/media';

injectGlobal`
  ::selection {
    color: ${theme.bg};
    background: ${theme.primary};
  }
  body {
    background: ${theme.bg};
    color: ${theme.default};
    @media ${media.phone} {
      font-size: 14px;
    }
  }
  a {
    color: #6959cc;
    text-decoration: none;
    transition: all ${theme.transitionTime};
  }
  a:hover {
    color: #9a8506;
  }
  h1, h2, h3, h4 {
    color: ${theme.dark};
  }



h.character {
    color: #1db6cc;
    line-height: 10px;
    text-align: center;
    text-decoration: none;
    text-indent: 0;
    text-transform: uppercase;
  }
}

.jess7 {
    color: #fff;
    font-size: 1.5em;
    speak: none;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
}

.jess1 {
    font-family: 'Sue Ellen Francisco', fantasy;
    color: #EC9F28;
    font-size: 1.5em;
    speak: none;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
}

.jess2 {
    font-family: 'Sue Ellen Francisco', fantasy;
    color: #DF3973;
    font-size: 1.5em;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
}

.jess3 {
    font-family: 'Sue Ellen Francisco', fantasy;
    color: #20A0BC;
    font-size: 1.5em;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
}

.jess5 {
    font-family: 'Sue Ellen Francisco', fantasy;
    color: #20A0BC;
    text-align: right;
    font-size: 1.5em;
    text-transform: none;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
}

.jess1d {
    color: #EC9F28;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
}

.jess2d {
    color: #DF3973;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
}

.jess3d {
    color: #20A0BC;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
}

.jess5d {
    color: #20A0BC;
    text-align: right;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
}

.chapter {
    font-family: 'Poppins', sans-serif;
    color: #e25e75;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
}

.cross {
    text-decoration: line-through;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
}

.thought {
    color: #168899;
    line-height: 25px;
    -webkit-font-smoothing: antialiased;
}


.Character-List {
  line-height: 30px;
  font-size: 15px;
  margin-bottom: 0;
  margin-left: 45%;
  orphans: 1;
  text-align: center;
  text-transform: uppercase;
  display: table;
}

.Explanation {
  line-height: 2;
  margin-bottom: 15px;
  margin-left: 0;
  margin-right: 0;
  margin-top: 30px;
  orphans: 1;
  text-align: left;
  text-indent: 0;
  widows: 1;
  display: table;
}

.Parenthetical {
  font-style: italic;
  font-variant: normal;
  font-weight: normal;
  line-height: 1.667;
  margin-bottom: 0;
  margin-left: 30%;
  margin-right: 0;
  margin-top: 0;
  orphans: 1;
  page-break-after: auto;
  page-break-before: auto;
  text-align: left;
  text-decoration: none;
  text-indent: 0;
  text-transform: none;
  widows: 1;
  display: table;
}

.Scratch {
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  line-height: 2;
  margin-bottom: 3em;
  margin-left: 0;
  margin-right: 0;
  margin-top: 20px;
  orphans: 1;
  page-break-after: auto;
  page-break-before: auto;
  text-align: left;
  text-decoration: none;
  text-indent: 0;
  text-transform: none;
  widows: 1;
  display: table;
}

.Setting {
  font-size: 15px;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  line-height: 2;
  margin-bottom: 5px;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  orphans: 1;
  page-break-after: auto;
  page-break-before: auto;
  text-align: left;
  text-decoration: none;
  text-indent: 0;
  text-transform: none;
  widows: 1;
  display: table;
}

.Stage {
  font-size: 15px;
  font-style: italic;
  font-variant: normal;
  font-weight: normal;
  line-height: 1.667;
  margin-bottom: 15px;
  margin-left: 35px;
  margin-right: 0;
  margin-top: 20px;
  orphans: 1;
  page-break-after: auto;
  page-break-before: auto;
  text-align: left;
  text-decoration: none;
  text-indent: 0;
  text-transform: none;
  widows: 1;
  display: table;
}

  blockquote {
    font-style: italic;
    position: relative;
  }

  blockquote:before {
    content: "";
    position: absolute;
    background: ${theme.primary};
    height: 100%;
    width: 6px;
    margin-left: -1.6rem;
  }
  label {
    margin-bottom: .5rem;
    color: ${theme.dark};
  }
  input, textarea {
    border-radius: .5rem;
    border: none;
    background: rgba(0, 0, 0, 0.05);
    padding: .25rem 1rem;
    &:focus {
      outline: none;
    }
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 3rem 0;
`;

const TemplateWrapper = props => {
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      <div>
        <SEO />
        {children()}
        <Footer>
          &copy;Kelsey Oates <br />
          <a href="https://github.com/LeKoArts/gatsby-starter-minimal-blog">Forked from LeKoArts</a>
        </Footer>;
      </div>
    </ThemeProvider>
  );
};

export default TemplateWrapper;
