
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="flex h-screen justify-center items-center bg-gray-900 text-white"
    >
      <h1 className="text-4xl font-bold">
  Welcome to Mücahid's Awesome Portfolio 🚀
</h1>

    </motion.div>
  );
}
