import React from 'react';
import { SectionRow } from './SectionRow';
import { TableWrapper } from './ArgsTable';
import { ResetWrapper } from '../../typography/DocumentFormatting';

export default {
  component: SectionRow,
  title: 'Docs/SectionRow',
  decorators: [
    (getStory) => (
      <ResetWrapper>
        <TableWrapper>
          <tbody>{getStory()}</tbody>
        </TableWrapper>
      </ResetWrapper>
    ),
  ],
};

const Story = (args) => <SectionRow {...args} />;

export const Section = Story.bind({});
Section.args = { level: 'section', caption: 'Props' };

export const Subsection = Story.bind({});
Subsection.args = { level: 'subsection', caption: 'HTMLElement' };

export const Collapsed = Story.bind({});
Collapsed.args = { ...Section.args, initialExpanded: false };

export const Nested = () => (
  <SectionRow {...Section.args}>
    <SectionRow {...Subsection.args}>
      <div>Some content</div>
    </SectionRow>
  </SectionRow>
);
