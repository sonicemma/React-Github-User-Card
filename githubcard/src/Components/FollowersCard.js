import React from 'react';

export default function FollowersCard(props) {
    return (
        <div className="card">
            <h2>{props.data.login}</h2>
        </div>
    )
}