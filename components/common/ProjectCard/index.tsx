import { Repos } from '@/lib/types';
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
  SiHtml5,
  SiCss3,
  SiLaravel,
  SiUml,

} from 'react-icons/si';
import { FaJava } from "react-icons/fa";
import { VscLinkExternal } from 'react-icons/vsc';

const ProjectCard: FC<Repos> = ({
  name,
  description,
  topics,
  html_url,
  delay,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, duration: 0.5 }}
      className='border border-r-2 border-b-2 dark:border-slate-100 border-slate-900 shadow-md shadow-slate-900/25 dark:shadow-slate-100/25 rounded-lg p-3 md:p-4 xl:p-6 flex flex-col justify-between gap-4 xl:gap-8'>
      <div className='flex justify-between'>
        <div className='flex flex-col gap-2 xl:gap-3'>
          <h2 className='font-bold text-xl lg:text-2xl 2xl:text-3xl'>{name}</h2>
          <span className='text-xs lg:text-sm 2xl:text-base font-light'>
            {description}
          </span>
        </div>
        <Link shallow href={html_url} target='_blank'>
          <VscLinkExternal />
        </Link>
      </div>
      <div className='flex items-center gap-2 lg:gap-3'>
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
              case 'html':
                return (
                  <Link
                    target='_blank'
                    shallow
                    key={2}
                    href={''}>
                    {' '}
                    <SiHtml5 />
                  </Link>
                );
                case 'css':
                  return (
                    <Link
                      target='_blank'
                      shallow
                      key={2}
                      href={''}>
                      {' '}
                      <SiCss3 />
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
              case 'laravel':
                return (
                  <Link
                    target='_blank'
                    shallow
                    key={3}
                    href={'https://www.w3schools.com/cpp/'}>
                    {' '}
                    <SiLaravel />
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
                case 'uml':
                return (
                  <Link
                    target='_blank'
                    shallow
                    key={4}
                    href={'https://www.jquery.com'}>
                    {' '}
                    <SiUml />
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
  );
};

export default ProjectCard;
