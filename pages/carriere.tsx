import React from 'react'
import { motion } from 'framer-motion';
 

const  Carriere=()=> {
  const cards = [
    {
      name: 'Card 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://gatsby-starter-portfolio-minimal.netlify.app/static/5a147418d33fc2b7c46b04381df53665/64b17/clement-h-95YRwf6CNw8-unsplash.jpg',
    },
    {
      name: 'Card 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://gatsby-starter-portfolio-minimal.netlify.app/static/be81169d975fe11b2b2a0d7c252e65e9/77c99/mdx-example.png',
    },
    {
      name: 'Card 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://gatsby-starter-portfolio-minimal.netlify.app/static/1d7b0d0d6e7b145f968f65bfc40a39b4/39f27/kelly-sikkema-Hl3LUdyKRic-unsplash.jpg',
    },
    {
      name: 'Card 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://gatsby-starter-portfolio-minimal.netlify.app/static/ae4c393892c33ee4431b5ba607b9788e/39f27/charles-deluvio-DgoyKNgPiFQ-unsplash.jpg',
    },
  

  ]
  return (
    <motion.div   
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }} 
          className=' flex flex-col gap-24  md:justify-center w-full max-w-6xl'>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className=' text-2xl font-bold md:text-3xl xl:text-4xl mb-6'>
            Education & Experience
          </motion.h1>

            {cards.map((card, index) => (
              
            <motion.div className=" mx-auto overflow-hidden sm:mb-10 lg:mb-32 w-full" key={index}>
              <motion.div className={`md:flex lg:flex lg:justify-between md:justify-between rounded-lg  ${index%2 ?'' : 'flex-row-reverse' }`}>
                <motion.div className="md:shrink-0  rounded-2xl md:h-60 md:max-w-md lg:h-80 lg:max-w-lg">
                  <img className=" w-full object-fill h-full  rounded-2xl" src={card.image} alt="Modern building architecture" />
                </motion.div>
                <motion.div className="leading-6 max-w-md">
                <p className="text-lg leading-tight uppercase tracking-wide mt-2">🎯 Sendatrack </p>
                  <motion.p  className="my-2 text-xl  font-semibold">FrondEnd develper</motion.p>
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