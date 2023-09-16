import { Statistic } from 'semantic-ui-react';
import './TaxSummary.css';

const TaxSummary = () => {
	return (
		<div className={'taxSummaryContainer'}>
			<h3>Congratulations, You are entitled to: </h3>
			<Statistic color="green">
				<Statistic.Value>27,312$</Statistic.Value>
			</Statistic>
		</div>
	);
};

export default TaxSummary;
