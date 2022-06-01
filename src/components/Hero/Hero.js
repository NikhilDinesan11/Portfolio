import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main centre>
      Welcome To <br />
      My Personal Portfolio
      </SectionTitle>
      <SectionText>
        A Full Stack developer  
      </SectionText>
      <Button onClick={()=> window.location= "https://linkedin.com"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;