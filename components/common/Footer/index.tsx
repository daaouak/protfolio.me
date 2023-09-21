import { motion } from 'framer-motion';
const Footer = () => {
  const date = new Date();
  return (
    <motion.footer
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{ delay: 0.4, type: 'spring' }}
      className='text-xs lg:text-base font-light self-center py-4 md:py-6 xl:py-8 w-full flex justify-center items-center gap-x-1'>
      <span className='font-semibold'>©{date.getFullYear()}</span> Aalouwan
      Abdessamad | All Rights Reserved
    </motion.footer>
  );
};

export default Footer;
