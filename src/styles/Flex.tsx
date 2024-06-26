import { FlexChildren, FlexType } from '@/utils/types.ts';
import styled from '@emotion/styled';

export const FlexStyle = styled.div<FlexType>`
  display: flex;
  flex-direction: ${props => props.$direction || 'row'};
  align-items: ${props => props.$align || 'stretch'};
  justify-content: ${props => props.$justify || 'stretch'};
  margin: ${({$margin}) => $margin || '0'};
  padding: ${({$padding}) => $padding || '0'};
`;
export const Flex = (props: FlexChildren) => {
  return <FlexStyle {...props} />;
};
