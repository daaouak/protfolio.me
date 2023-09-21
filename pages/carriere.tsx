import React from 'react'
import { motion } from 'framer-motion';
 

const  Carriere=()=> {
  const cards = [
    {
      name: 'Card 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://picsum.photos/id/1/300/200',
    },
    {
      name: 'Card 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://picsum.photos/id/2/300/200',
    },
    {
      name: 'Card 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://picsum.photos/id/3/300/200',
    },
    {
      name: 'Card 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://picsum.photos/id/4/300/200',
    },
  

  ]
  return (
    <motion.div   
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }} 
          className=' flex flex-col gap-12 md:gap-12 lg:gap-14 md:justify-center max-w-7xl'>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className='text-1xl font-bold md:text-2xl xl:text-3xl'>
            Education & Experience
          </motion.h3>

            {cards.map((card, index) => (
              
            <motion.div className=" mx-auto overflow-hidden mb-40 " key={index}>
              <motion.div className={`md:flex md:gap-36 lg:gap-56  ${index%2 ?'' : 'flex-row-reverse' }`}>
                <motion.div className="md:shrink-0  rounded-2xl">
                  <img className="	 w-full object-cover sm:h-32 md:h-52 lg:h-64" src={card.image} alt="Modern building architecture" />
                </motion.div>
                <motion.div className="p-8  leading-6">
                <p className="text-lg leading-tight uppercase tracking-wide">🎯 Sendatrack </p>
                  <motion.p  className="my-2 text-xl text-black font-semibold">FrondEnd develper</motion.p>
                  <motion.p className="my-5  text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</motion.p>
                  <motion.div className='flex gap-5'>
                     <motion.p className="my-6  text-slate-500 ">Started : 10/05/2023 </motion.p>
                  <motion.p className="my-6  text-slate-500 ">4 Months</motion.p>
                  </motion.div>
                 
                </motion.div>
              </motion.div>
            </motion.div>
            
            ))
           }
           
    </motion.div>
  )
}

export default Carriere