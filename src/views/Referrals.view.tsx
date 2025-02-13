import React from 'react';
import styled from 'styled-components';
import { certifications } from 'constants/certifications.constants';

// Styled Components
const ReferralCertContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const SectionContainer = styled.div`
  width: 90%;
  padding: 20px;
`;

const SectionHeader = styled.h3`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
`;

const CertList = styled.ul`
  list-style: none;
  margin: 20px 0;
  padding: 0;
  width: 100%;
`;

const CertItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 15px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  background: transparent;
  color: ${(props) => props.theme.colors.secondary};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #152934;
  }
`;

const CertName = styled.span`
  font-size: ${(props) => props.theme.typography.fontSize.small};
  font-weight: ${(props) => props.theme.typography.fontWeight.bold};
`;

const DownloadLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};
  background: transparent;
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;
  border: 1px solid ${(props) => props.theme.colors.primary};

  &:hover {
    background: transparent;
    color: ${(props) => props.theme.colors.secondary};
    opacity: 0.9;
  }
`;

function ReferralsView() {
  return (
    <ReferralCertContainer>
      <SectionContainer>
        <SectionHeader>Referrals</SectionHeader>
      </SectionContainer>
      <SectionContainer>
        <SectionHeader>Certifications</SectionHeader>
        <CertList>
          {certifications.map((cert, index) => (
            <CertItem key={index}>
              <CertName>{cert.name}</CertName>
              <DownloadLink href={cert.file} download>
                Download
              </DownloadLink>
            </CertItem>
          ))}
        </CertList>
      </SectionContainer>
    </ReferralCertContainer>
  );
}

export default ReferralsView;
