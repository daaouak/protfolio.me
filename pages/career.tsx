import React, { use } from 'react'
import { motion } from 'framer-motion';
import { CarrierGrid } from "@/components";
import {  AnimatePresence } from "framer-motion";
import { FaAngleDown,
  FaLaravel ,
  FaReact,
  FaJs,
  


} from "react-icons/fa6";
import {cards, skills} from '@/lib/data';


const  Career =( )=> {
  
const [visible, setVisivle] = React.useState(7);

  return (
    <motion.div   
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }} 
          className=' flex flex-col gap-24  md:justify-center w-full max-w-6xl'>
               <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className=' text-2xl  md:text-3xl xl:text-4xl mt-3'>
            Skills
          </motion.h1>
            <motion.div className='flex justify-center  ' whileInView={{ opacity: 1 }}  >
                <motion.ul className='overflow-x-auto     gap-2 weweMd wewelg  scrolli'>
                  {skills.slice(0, visible).map((skill, i) => (
                      <motion.li  
                      key={skill.id} 
                      className='interest'
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2*i }}
                      >
                       {skill.icon}
                        <h1 className='text-xl ml-3'>{skill.name}</h1>
                      </motion.li>
                    ))}
                     {
                      visible == skills.length ? null :
                        <motion.li
                        key={ skills.length}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2*7}}
                         onClick={() => setVisivle(skills.length)} className=' interest  bg-slate-900 text-white dark:bg-white dark:text-slate-900'>
                            <FaAngleDown className='text-2xl' />
                            <p className='text-xl  ml-3 '>LOAD MORE</p>
                        </motion.li> 
                      } 
                </motion.ul>
            </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className=' text-2xl  md:text-3xl xl:text-4xl '>
            Experiences & Education
          </motion.h1>
          {   cards.map((card, i) => (
                  <CarrierGrid   {...card} delay={i * 0.7} />
              ))  } 
    </motion.div>
  )
}

export default Career 