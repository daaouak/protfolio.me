import React from 'react'
import { motion } from 'framer-motion';
import { CarrierGrid } from "@/components";




const  Carriere=()=> {
  const cards = [
    {
      id: 1,
      company: 'Sendatrack , Tanger',
      title: 'FrontEnd Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      topics: ['figma', 'flutter'],
      image: 'https://gatsby-starter-portfolio-minimal.netlify.app/static/5a147418d33fc2b7c46b04381df53665/64b17/clement-h-95YRwf6CNw8-unsplash.jpg',
    },
    {
      id: 2,
      company: 'Matious, El Mohammedia',
      title: 'FrontEnd Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      topics: ['react', 'adobexd', 'redux', 'tailwindcss', 'vercel'],
      image: 'https://gatsby-starter-portfolio-minimal.netlify.app/static/be81169d975fe11b2b2a0d7c252e65e9/77c99/mdx-example.png',
    },
    {
      id: 3,
      company: 'sendatrack',
      title: 'FrontEnd Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      topics: ['react', 'tailwindcss', 'vercel'],
      image: 'https://gatsby-starter-portfolio-minimal.netlify.app/static/1d7b0d0d6e7b145f968f65bfc40a39b4/39f27/kelly-sikkema-Hl3LUdyKRic-unsplash.jpg',
    },
    {
      id: 4,
      company: 'sendatrack',
      title: 'FrontEnd Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      topics: ['javascript', 'react', 'tailwindcss', 'vercel'],
      image: 'https://gatsby-starter-portfolio-minimal.netlify.app/static/ae4c393892c33ee4431b5ba607b9788e/39f27/charles-deluvio-DgoyKNgPiFQ-unsplash.jpg',
    },
  ];
  
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
            Experiences
          </motion.h1>

            {cards.map((card, i) => (
              
              <CarrierGrid key={card.id} {...card} delay={i * 0.7} />
            
            ))
           }
           
    </motion.div>
  )
}

export default Carriere