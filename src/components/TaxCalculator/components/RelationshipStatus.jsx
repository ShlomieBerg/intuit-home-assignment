import { useState } from 'react';
import { Placeholder } from 'semantic-ui-react';

const STATUSES = ['married', 'single', 'its complicated'];

const RelationshipStatus = () => {
	const [userStatus, setUserStatus] = useState(null);
	const createItems = () => {
		return STATUSES.map((status) => {
			return (
				<div
					key={status}
					style={{
						margin: '5px',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}
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
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
			{createItems()}
		</div>
	);
};

export default RelationshipStatus;
