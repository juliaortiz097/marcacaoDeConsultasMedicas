import { ListItem } from 'react-native-elements';
import styled from 'styled-components/native';
import theme from '../styles/theme';

export const UserCard = styled(ListItem)`
  background-color: ${theme.colors.background};
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 15px;
  border-width: 1px;
  border-color: ${theme.colors.border};
`;
