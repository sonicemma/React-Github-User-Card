import React from 'react';
import FollowersCard from './FollowersCard';

export default function GitCard(props) {
    console.log(props.props)
	return(
		<div className="gitCard">
			{props.props.map((followers, id) => (
                <FollowersCard data={followers} key='id'/>
			))}
		</div>
	)
}