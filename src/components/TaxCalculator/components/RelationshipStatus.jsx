import { useState } from 'react';
import { Placeholder } from 'semantic-ui-react';
import { RELATIONSHIP_STATUSES } from '../consts.js';
import './RelationshipStatus.css';

const RelationshipStatus = () => {
	const [userStatus, setUserStatus] = useState(null);
	const createItems = () => {
		return RELATIONSHIP_STATUSES.map((status) => {
			return (
				<div
					className={'relationshipStatusContainer'}
					key={status}
					onClick={() => {
						setUserStatus(status);
					}}
				>
					<Placeholder
						style={{
							height: 150,
							width: 150,
							marginBottom: '5px',
							border: status === userStatus ? '2px solid #89CFF0' : null,
						}}
					>
						<Placeholder.Image square />
					</Placeholder>
					<h3>{status.charAt(0).toUpperCase() + status.slice(1)}</h3>
				</div>
			);
		});
	};

	return (
		<div
			className={'statusesContainer'}
			style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}
		>
			{createItems()}
		</div>
	);
};

export default RelationshipStatus;
