import { motion } from "framer-motion";
import { useState } from "react";

import "./styles.scss";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <motion.div Layout onClick={() => setIsOpen(!isOpen)} className="card">
        <motion.h2 Layout="position"> Framer motion </motion.h2>
        {isOpen && (
          <motion.div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p>scrambled it to make a type specimen book.</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default App;
