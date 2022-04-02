import { motion } from 'framer-motion';
import { useState } from 'react';

import './styles.scss';

function App() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="App">
			<motion.div
				layout
				transition={{ layout: { duration: 1, type: 'spring' } }}
				onClick={() => setIsOpen(!isOpen)}
				className="card"
				style={{
					borderRadius: '1rem',
					boxShadow: '0px 10px 30px rgba(0,0,0,0.5',
				}}
			>
				<motion.h2 layout="position"> Framer motion 🚀</motion.h2>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}
						className="expand"
					>
						<p>
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry.
						</p>
						<p>scrambled it to make a type specimen book.</p>
					</motion.div>
				)}
			</motion.div>
		</div>
	);
}

export default App;
