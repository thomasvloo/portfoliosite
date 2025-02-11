import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import React from 'react';
import styled from 'styled-components';
import { WorkDetails } from 'types/types';

interface WorkItemProps {
  work: WorkDetails;
  expanded: boolean;
  onChange: (event: React.SyntheticEvent, isExpanded: boolean) => void;
}

// Styled Components
const WorkItemContainer = styled.div`
  display: block;
  background: transparent;
`;

const StyledAccordion = styled(Accordion)`
  border-radius: 50px !important;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.colors.primary};
  background-color: transparent !important; /* Ensures transparency */
  box-shadow: none;

  &.Mui-expanded {
    background-color: transparent !important; /* Ensures expanded state remains transparent */
  }
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  padding: 10px;
  background-color: transparent !important; /* Override MUI default */

  .MuiAccordionSummary-expandIconWrapper {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const AccordionSummaryContent = styled.div`
  display: grid;
  grid-template-columns: 140px 1fr;
  column-gap: 16px;
  align-items: center;
`;

const WorkYears = styled.span`
  font-size: ${(props) => props.theme.typography.fontSize.medium};
  color: ${(props) => props.theme.colors.primary};
  opacity: 0.6;
  white-space: nowrap;
  text-align: left;
  margin-right: 40px;
`;

const CompanyName = styled.span`
  font-size: ${(props) => props.theme.typography.fontSize.large};
  font-weight: ${(props) => props.theme.typography.fontWeight.bold};
  color: ${(props) => props.theme.colors.primary};
  opacity: 0.8;
  text-align: left;
`;

const WorkDetailsContainer = styled.div`
  color: ${(props) => props.theme.colors.secondary};
  width: 100%;
  font-size: ${(props) => props.theme.typography.fontSize.medium};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const WorkLabelValueRow = styled.p`
  display: grid;
  grid-template-columns: 140px 1fr;
  column-gap: 8px;
  margin: 0 0 5px 0;
`;

const WorkLabel = styled.span`
  white-space: nowrap;
  font-weight: ${(props) => props.theme.typography.fontWeight.bold};
`;

const WorkValue = styled.span`
  font-weight: ${(props) => props.theme.typography.fontWeight.normal};
`;

const WorkItem: React.FC<WorkItemProps> = ({ work, expanded, onChange }) => {
  const { company, position, startYear, endYear, location, description } = work;

  return (
    <WorkItemContainer>
      <StyledAccordion expanded={expanded} onChange={onChange}>
        <StyledAccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="work-content"
          id="work-header"
        >
          <AccordionSummaryContent>
            <WorkYears>
              {startYear} - {endYear}
            </WorkYears>
            <CompanyName>{company}</CompanyName>
          </AccordionSummaryContent>
        </StyledAccordionSummary>
        <AccordionDetails>
          <WorkDetailsContainer>
            <WorkLabelValueRow>
              <WorkLabel>Position:</WorkLabel>
              <WorkValue>{position}</WorkValue>
            </WorkLabelValueRow>
            <WorkLabelValueRow>
              <WorkLabel>Location:</WorkLabel>
              <WorkValue>{location}</WorkValue>
            </WorkLabelValueRow>
            <WorkLabelValueRow>
              <WorkLabel>Description:</WorkLabel>
              <WorkValue>{description}</WorkValue>
            </WorkLabelValueRow>
          </WorkDetailsContainer>
        </AccordionDetails>
      </StyledAccordion>
    </WorkItemContainer>
  );
};

export default WorkItem;
