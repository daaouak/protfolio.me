import React, { use } from 'react'
import { motion } from 'framer-motion';
import { CarrierGrid } from "@/components";
import {  AnimatePresence } from "framer-motion";
import { BsLightbulb } from 'react-icons/bs';
import {cards, skills} from '@/lib/data';

const  Career =( )=> {
  
const [visible, setVisivle] = React.useState(7);

  return (
    <motion.div   
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }} 
          className=' flex flex-col gap-24  md:justify-center w-full max-w-6xl'>
               <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className=' text-2xl font-bold md:text-3xl xl:text-4xl '>
            Skills
          </motion.h1>
            <div className='flex justify-center'>
                <ul className='overflow-x-auto grid   grid-flow-col lg:grid-rows-4 md:grid-rows-2  gap-4 '>
                  {skills.slice(0, visible).map((skill, i) => (
                      <li   className='bg-white border border-black/[0.1] rounded-xl px-5 py-3 flex gap-3 w-70 h-15'>
                        <BsLightbulb className='text-2xl text-yellow-500' />
                        <h1 className='text-xl font-bold'>{skill.name}</h1>
                      </li>
                    ))}
                     {
                      visible == skills.length ? null :
                        <li onClick={() => setVisivle(skills.length)} className='  border border-black/[0.1] rounded-xl px-5 py-3 flex gap-3      width: 15.625rem;
                        height: 3rem;'>
                            <BsLightbulb className='text-2xl text-yellow-500' />
                            <h1 className='text-xl font-bold'>show more</h1>
                        </li> 
                      } 
                </ul>
            </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className=' text-2xl font-bold md:text-3xl xl:text-4xl '>
            Experiences & Education
          </motion.h1>
          {   cards.map((card, i) => (
                  <CarrierGrid key={card.id} {...card} delay={i * 0.7} />
              ))  } 
    </motion.div>
  )
}

export default Career 