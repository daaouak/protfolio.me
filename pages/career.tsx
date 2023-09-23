import React, { use } from 'react'
import { motion } from 'framer-motion';
import { CarrierGrid } from "@/components";
import {  AnimatePresence } from "framer-motion";
import { BsLightbulb } from 'react-icons/bs';
import mongoose from "mongoose";
  // const CareerCard = require('../db/careerModel');


const  Career =( )=> {
  

  const MONGODB_URI = 'mongodb+srv://abdessamadpas:abdessamadpas@portfolio.wbo0bti.mongodb.net/';
  const CareerCard = mongoose.model('Test', new  mongoose.Schema({ name: String }));
  const getCards = async () => {
    try {
    

      mongoose.connect(MONGODB_URI);
      
      const db = mongoose.connection;
      
      db.on('error', (error) => {
        console.error('MongoDB connection error:', error);
      });
      
      db.once('open', () => {
        console.log('MongoDB Connected');
      });
      
      const careers = await CareerCard.find();
      console.log('Fetched careers:', careers);

      // You should do something with the fetched data here, like setting it in state.
      // For this example, let's assume you have a state variable called "careers" to store the data.
      // You will also need to handle errors appropriately.
      
    } catch (error) {
      console.error('Error fetching careers :', error);
    }
  }

  React.useEffect(() => {
    getCards();
  }, []);
  const cards = [
    {
      id: 1,
      company: 'Sendatrack , Tanger',
      title: 'FrontEnd Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      topics: ['figma', 'flutter'],
      image: 'https://scontent.ftng2-1.fna.fbcdn.net/v/t39.30808-6/328862383_1620872421685697_403075783219871892_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=1b51e3&_nc_eui2=AeFXn-Y_lk2JxynxlcLuxrc98UZ6dNouUZDxRnp02i5RkMNlyvm2d0V1RHnpzHlfS4QzgOFqvdQnvR6x1Z9qmRNd&_nc_ohc=6GjpzEERZ6oAX--CIvo&_nc_zt=23&_nc_ht=scontent.ftng2-1.fna&oh=00_AfDszzGGET9ldn8VJ-oq9KIaQJi1J0I9Fl-ZXibjOt9TKQ&oe=6513AB0B',
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
          transition={{ delay: 0.1 }} 
          className=' flex flex-col gap-24  md:justify-center w-full max-w-6xl'>
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