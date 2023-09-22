import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FC } from 'react';
import {
  SiCoursera,
  SiCplusplus,
  SiDocker,
  SiFramer,
  SiJavascript,
  SiMariadb,
  SiNextdotjs,
  SiNginx,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
  SiDjango,
  SiNodedotjs,
  SiMongodb,
  SiJsonwebtokens,
  SiFirebase,
  SiHeroku,
  SiVercel,
  SiHibernate,
  SiJquery  ,
  SiCoffeescript,
  SiFlutter,
  SiFigma,
  SiAdobexd,
  SiRedux,

} from 'react-icons/si';
import { FaJava } from "react-icons/fa";
import { VscLinkExternal } from 'react-icons/vsc';

const  Carriere=()=> {
  const cards = [
    {
      company: 'Sendatrack , Tanger',
      title : 'FrontEnd Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      topics: ['figma', 'flutter'],
      image: 'https://gatsby-starter-portfolio-minimal.netlify.app/static/5a147418d33fc2b7c46b04381df53665/64b17/clement-h-95YRwf6CNw8-unsplash.jpg',
    },
    {
      company: 'Matious, El Mohammedia',
      title : 'FrontEnd Developer',     
       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
       topics: [, 'react',"adobexd", "redux", 'tailwindcss', 'vercel'],

      image: 'https://gatsby-starter-portfolio-minimal.netlify.app/static/be81169d975fe11b2b2a0d7c252e65e9/77c99/mdx-example.png',
    },
    {
      company: 'sendatrack',
      title : 'FrontEnd Developer',
      
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      topics: [, 'react', 'tailwindcss', 'vercel'],

      image: 'https://gatsby-starter-portfolio-minimal.netlify.app/static/1d7b0d0d6e7b145f968f65bfc40a39b4/39f27/kelly-sikkema-Hl3LUdyKRic-unsplash.jpg',
    },
    {
      company: 'sendatrack',
      title : 'FrontEnd Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      topics: ['javascript', 'react', 'tailwindcss', 'vercel'],

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
              
            <motion.div className={` ${index%2 ?' border-l-2' : ' border-r-2' } border-b-2 dark:border-slate-100 border-slate-900 shadow-md shadow-slate-900/25 dark:shadow-slate-100/25 p-8   rounded-2xl  mx-auto overflow-hidden sm:mb-10 lg:mb-32 w-full`} key={index}>
              <motion.div className={`md:flex lg:flex md:gap-5 lg:justify-between md:justify-between rounded-lg  ${index%2 ?'' : 'flex-row-reverse' }`}>
                <motion.div className="md:shrink-0  rounded-2xl md:h-60 md:max-w-md lg:h-80 lg:max-w-lg">
                  <img className=" w-full object-fill h-full  rounded-2xl" src={card.image} alt="Modern building architecture" />
                </motion.div>
                <motion.div className="leading-6 max-w-md">
                <p className="text-lg leading-tight uppercase tracking-wide mt-2">🎯 {card.company} </p>
                  <motion.p  className="my-2 text-xl  font-semibold">{card.title}</motion.p>
                  <motion.p className="my-5  text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</motion.p>
                  <motion.div className='flex gap-5'>
                    <motion.p className="my-6  text-slate-500 ">Started : 10/05/2023 </motion.p>
                    <motion.p className="my-6  text-slate-500 ">4 Months</motion.p>
                  </motion.div>
                  <div className='flex items-center gap-2 lg:gap-3'>
        {card.topics.map((topic) => {
          switch (topic) {
            case 'javascript':
              return (
                <Link
                  target='_blank'
                  shallow
                  key={1}
                  href={
                    'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
                  }>
                  {' '}
                  <SiJavascript />
                </Link>
              );
            case 'c':
              return (
                <Link
                  target='_blank'
                  shallow
                  key={2}
                  href={'https://www.cprogramming.com/'}>
                  {' '}
                  <SiCoursera />
                </Link>
              );
            case 'cpp':
              return (
                <Link
                  target='_blank'
                  shallow
                  key={3}
                  href={'https://www.w3schools.com/cpp/'}>
                  {' '}
                  <SiCplusplus />
                </Link>
              );
            case 'typescript':
              return (
                <Link
                  target='_blank'
                  shallow
                  key={4}
                  href={'https://www.typescriptlang.org'}>
                  {' '}
                  <SiTypescript />
                </Link>
              );
              case 'java':
                return (
                  <Link
                    target='_blank'
                    shallow
                    key={4}
                    href={'https://www.java.com'}>
                    {' '}
                    <FaJava />
                  </Link>
                );
                       
              case 'adobexd':
                return (
                  <Link
                    target='_blank'
                    shallow
                    key={4}
                    href={'https://www.jquery.com'}>
                    {' '}
                    <SiAdobexd />
                  </Link>
                );
                       
              case 'redux':
                return (
                  <Link
                    target='_blank'
                    shallow
                    key={4}
                    href={'https://www.jquery.com'}>
                    {' '}
                    <SiRedux />
                  </Link>
                );
              case 'jquery':
                return (
                  <Link
                    target='_blank'
                    shallow
                    key={4}
                    href={'https://www.jquery.com'}>
                    {' '}
                    <SiJquery />
                  </Link>
                );
                case 'hibernate':
                  return (
                    <Link
                      target='_blank'
                      shallow
                      key={4}
                      href={'https://www.hibernate.org'}>
                      {' '}
                      <SiHibernate />
                    </Link>
                  );
              case 'nodejs':
                return (
                  <Link
                    target='_blank'
                    shallow
                    key={4}
                    href={'https://www.node.org'}>
                    {' '}
                    <SiNodedotjs />
                  </Link>
                );
                case 'flutter':
                  return (
                    <Link
                      target='_blank'
                      shallow
                      key={4}
                      href={'https://www.node.org'}>
                      {' '}
                      <SiFlutter />
                    </Link>
                  );
                  case 'figma':
                    return (
                      <Link
                        target='_blank'
                        shallow
                        key={4}
                        href={'https://www.node.org'}>
                        {' '}
                        <SiFigma />
                      </Link>
                    );
            case 'react':
              return (
                <Link
                  target='_blank'
                  shallow
                  key={5}
                  href={'https://reactjs.org/'}>
                  {' '}
                  <SiReact />
                </Link>
              );
              case 'react-native':
              return (
                <Link
                  target='_blank'
                  shallow
                  key={5}
                  href={'https://reactnative.dev/'}>
                  {' '}
                  <SiReact />
                </Link>
              );
            case 'nextjs':
              return (
                <Link
                  target='_blank'
                  shallow
                  key={6}
                  href={'https://nextjs.org/'}>
                  {' '}
                  <SiNextdotjs />
                </Link>
              );
              case 'vercel':
              return (
                <Link
                  target='_blank'
                  shallow
                  key={6}
                  href={'https://vercel.com/'}>
                  {' '}
                  <SiVercel />
                </Link>
              );
              case 'heroku':
              return (
                <Link
                  target='_blank'
                  shallow
                  key={6}
                  href={'https://heroku.com/'}>
                  {' '}
                  <SiHeroku />
                </Link>
              );
            case 'tailwindcss':
              return (
                <Link
                  target='_blank'
                  shallow
                  key={7}
                  href={'https://tailwindcss.com/'}>
                  {' '}
                  <SiTailwindcss />
                </Link>
              );
              case 'django':
                return (
                  <Link
                    target='_blank'
                    shallow
                    key={7}
                    href={'https://www.djangoproject.com/'}>
                    {' '}
                    <SiDjango/>
                  </Link>
                );
            case 'docker':
              return (
                <Link
                  target='_blank'
                  shallow
                  key={7}
                  href={'https://docs.docker.com/'}>
                  {' '}
                  <SiDocker />
                </Link>
              );
            case 'framer-motion':
              return (
                <Link
                  target='_blank'
                  shallow
                  key={7}
                  href={'https://www.framer.com/motion/'}>
                  {' '}
                  <SiFramer />
                </Link>
              );
            case 'nginx':
              return (
                <Link
                  target='_blank'
                  shallow
                  key={8}
                  href={'https://www.nginx.com/'}>
                  {' '}
                  <SiNginx />
                </Link>
              );
              case 'mongodb':
                return (
                  <Link
                    target='_blank'
                    shallow
                    key={8}
                    href={'https://www.mongodb.com/'}>
                    {' '}
                    <SiMongodb />
                  </Link>
                );
                case 'jwt':
                  return (
                    <Link
                      target='_blank'
                      shallow
                      key={8}
                      href={'https://www.jwt.io/'}>
                      {' '}
                      <SiJsonwebtokens />
                    </Link>
                  );
             case 'firebase':
                  return (
                    <Link
                      target='_blank'
                      shallow
                      key={8}
                      href={'https://www.firebase.google.com/'}>
                      {' '}
                      <SiFirebase />
                    </Link>
                  );
          }
        })}
      </div>
                 
                </motion.div>
              </motion.div>
            </motion.div>
            
            ))
           }
           
    </motion.div>
  )
}

export default Carriere