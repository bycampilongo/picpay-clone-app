import styled from 'styled-components/native'

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  contentContainerStyle: {
    alignItems: 'center',
    paddingLeft: 16,
  },
}))`
    background: #1e222b;
    height: 150px;
    margin-top: 8px;
`;

export const Option = styled.TouchableOpacity`
  width: 80px;
  margin-right: 16px;
  align-items: center;
`
export const Img = styled.Image``
export const Label = styled.Text`
  text-align: center;
  color: #fff;
  margin-top: 5px;
  font-weight: bold;
  font-size: 14px;
`
