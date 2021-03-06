import styled from 'styled-components/native'
import { Platform } from 'react-native'

export const Wrapper = styled.SafeAreaView`
    flex: 1;
    background-color: #000;
    padding-top: ${Platform.OS === 'android' ? '15%' : 0}
`

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const BalanceContainer = styled.View`
  margin-left: 12%;
`;

export const BalanceTitle = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  text-align: center;
`;

export const Balance = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

export const IconsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Container = styled.ScrollView`
`;