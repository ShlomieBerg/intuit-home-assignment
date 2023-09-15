import { Statistic } from 'semantic-ui-react';

const TaxSummary = () => {
	return (
		<div style={{ textAlign: 'center', paddingTop: '30px' }}>
			<h3>Congratulations, You are entitled to: </h3>
			<Statistic color="green">
				<Statistic.Value>27,312$</Statistic.Value>
			</Statistic>
		</div>
	);
};

export default TaxSummary;
