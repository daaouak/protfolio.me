import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FC } from 'react';
import Image from 'next/image';

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
import { Carrier } from '@/lib/types';

const  CarrierGrid : FC<Carrier> = ({
  id,
  delay,
  title,
  topics,
  company,
  image,
  
}) =>{
  return (
  <motion.div

  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: delay, duration: 0.5 }}

  className={` ${id! % 2 ?' border-l-2' : ' border-r-2' } border-b-2 dark:border-slate-100 border-slate-900 shadow-md shadow-slate-900/25 dark:shadow-slate-100/25 p-8   rounded-2xl  mx-auto overflow-hidden sm:mb-10 lg:mb-32 w-full`} key={delay}>
    <motion.div className={`md:flex lg:flex md:gap-5 lg:justify-between md:justify-between rounded-lg  ${id! %2 ?'' : 'flex-row-reverse' }`}>
      <motion.div  whileHover={{ translateY: -2,   }} className=" md:shrink-0 w-lg rounded-2xl md:h-60 md:max-w-md lg:h-80 lg:max-w-lg lg:min-w-[420px]">
        <Image width={400} height={400} className=" w-full object-fill h-full  rounded-2xl" src={image} alt="Modern building architecture" />
      </motion.div>
      <motion.div className="leading-6 max-w-md">
        <motion.p className="text-lg leading-tight uppercase tracking-wide mt-2">🎯 {company} </motion.p>
        <motion.p  className="my-2 text-xl  font-semibold">{title}</motion.p>
        <motion.p className="my-5  text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</motion.p>
        <motion.div className='flex gap-5'>
          <motion.p className="my-6  text-slate-500 ">Started : 10/05/2023 </motion.p>
          <motion.p className="my-6  text-slate-500 ">4 Months</motion.p>
        </motion.div>
        <motion.div className='flex items-center gap-2 lg:gap-3 mt-3'>
          {topics.map((topic) => {
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
                  <SiJavascript  />
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
        </motion.div>
      </motion.div>
    </motion.div>
  </motion.div>
  
  )
}

export default CarrierGrid