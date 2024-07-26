import Transactions from "../features/transactions/Transactions.jsx";
import Budgets from "../features/budgets/Budgets.jsx";

import '../App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Expenses Tracker</h1>
				<Budgets />
				<Transactions />
			</header>
		</div>
	);
}

export default App;
