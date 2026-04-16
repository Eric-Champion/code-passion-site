import { motion } from "framer-motion";

const ScrollReveal = ({ children, delay = 0.4 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // Départ : invisible et 30px plus bas
      whileInView={{ opacity: 1, y: 0 }} // Arrivée : visible et à sa place
      viewport={{ once: true, amunt: 0.2, margin: "-50px" }} // Déclenche quand 20% de la section est visible
      transition={{ duration: 0.6, ease: "easeOut", delay: delay }} // Transition fluide
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;