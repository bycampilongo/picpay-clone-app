import React from 'react'

import Suggestions from '../../components/Suggestions'
import { Container, IconsContainer, Balance, BalanceContainer, BalanceTitle, Header, Wrapper } from './styles'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

export default function Home() {
    return (
        <Wrapper>
            <Container>
                <Header>
                    <IconsContainer>
                        <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86c" />
                    </IconsContainer>
                    <BalanceContainer>
                        <BalanceTitle>Meu Saldo</BalanceTitle>
                        <Balance>0,00</Balance>
                    </BalanceContainer>
                    <IconsContainer>
                        <AntDesign name="gift" size={30} color="#10c86c" style={{ marginRight: 20 }} />
                        <MaterialCommunityIcons name="ticket-percent-outline" size={30} color="#10c86c" />
                    </IconsContainer>
                </Header>
                <Suggestions>

                </Suggestions>
            </Container>
        </Wrapper>
    )
}