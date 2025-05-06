// Императивная часть...
import logo from './assets/logo.svg';
import './App.css';

function getCurrentData() {
	const date = new Date()
	const day = String(date.getDate()).padStart(2, '0')
	const month = String(date.getMonth() + 1).padStart(2, '0')
	const year = date.getFullYear()

	return `${day}.${month}.${year}`
  }

// Декларативная часть...
export const App = () => {
	const data = getCurrentData() // Императивная часть

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>Date : { data } </p>
			</header>
		</div>
	);
};
