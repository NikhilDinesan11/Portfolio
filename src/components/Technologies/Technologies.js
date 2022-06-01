import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id ="tech" >
  <SectionDivider />
  <br></br>
  <SectionTitle>Technologies</SectionTitle>

  <SectionText>
    I've worked with a range of technologies in web development world. From backend to frontend.
  </SectionText>
  <List>
    <ListItem>
    <DiReact size="3rem"></DiReact>
    <ListContainer>
      <ListTitle>
        Frontend
      </ListTitle>
      <ListParagraph>
        Experience with <br /> React.js
      </ListParagraph>
    </ListContainer>
    </ListItem>
    <ListItem>
    <DiFirebase size="3rem"></DiFirebase>
    <ListContainer>
      <ListTitle>
        Backend
      </ListTitle>
      <ListParagraph>
        Experience with <br /> Node.js and Databases
      </ListParagraph>
    </ListContainer>
    </ListItem>
    
  </List>
  </Section>
);

export default Technologies;
