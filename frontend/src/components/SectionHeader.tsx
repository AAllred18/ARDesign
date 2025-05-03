import { motion } from "framer-motion";

interface SectionHeaderProps {
  text: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ text }) => {
  return (
    <motion.div
      className="bg-blue-50 text-blue-900 text-center py-6 text-3xl font-bold rounded-md mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {text}
    </motion.div>
  );
};

export default SectionHeader;
