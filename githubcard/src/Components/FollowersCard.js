import React from 'react';
import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default function FollowersCard(props) {
    return (
        <Card className="card">
            <h2>{props.data.login}</h2>
        </Card>
    )
}