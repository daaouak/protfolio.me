import { EmailValidation, Input } from '@/components';
import { formFields } from '@/lib/types';
import { submitButtonVariants } from '@/lib/variants';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

const Contact = () => {
  const [fields, setFields] = useState<formFields>({});
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const subjectChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields({
      ...fields,
      subject: e.target.value,
    });
  };
  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.target.value) &&
      e.target.value !== ''
    ) {
      setFields({ ...fields, email: e.target.value, emailError: true });
    } else {
      setFields({ ...fields, email: e.target.value, emailError: false });
    }
  };

  const textAreaChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFields({ ...fields, message: e.target.value });
  };

  const formOnSubmit = () => (e: any) => {
    e.preventDefault();
    if (!fields.email) {
      setFields({ ...fields, emailError: true });
      if (!fields.subject) setFields({ ...fields, subjectError: true });
      if (!fields.message) setFields({ ...fields, messageError: true });
      setTimeout(() => {
        setFields({
          ...fields,
          emailError: false,
          subjectError: false,
          messageError: false,
        });
      }, 2000);
      return;
    }
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        e.target,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(
        (res) => {
          if (res.text === 'OK') setIsValid(true);
          else if (res.text === 'KO') setIsValid(false);
        },
        (err) => {
          console.log(err.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className='container flex flex-col items-center justify-center gap-6 md:gap-12 xl:gap-20'>
      {isValid === null ? (
        <>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className='text-4xl font-bold md:text-5xl xl:text-6xl'>
            Hit me up!
          </motion.h1>
          <form
            className='w-full lg:w-[60%] xl:w-[50%] grid md:grid-cols-2 gap-2 lg:gap-4'
            onSubmit={formOnSubmit()}>
            <Input
              name='email'
              label='Email'
              HTMLType='text'
              inputOnChange={emailChangeHandler}
              error={fields.emailError}
              value={fields.email}
            />
            <Input
              name='subject'
              label='Subject'
              HTMLType='text'
              inputOnChange={subjectChangeHandler}
              error={fields.subjectError}
              value={fields.subject}
            />
            <Input
              name='message'
              label='Message'
              HTMLType='textarea'
              textAreaOnChange={textAreaChangeHandler}
              error={fields.messageError}
              value={fields.message}
              className='h-36 lg:h-40 xl:h-52'
            />
            <motion.button
              type='submit'
              className='md:col-span-2 text-xs px-4 py-2 md:text-sm 2xl:text-base border rounded-md border-slate-900 bg-slate-900 text-slate-100 
              dark:bg-slate-100 dark:text-slate-900'
              initial='hidden'
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1, duration: 0.2 },
              }}
              whileHover='hover'
              whileTap='tap'
              variants={submitButtonVariants}>
              Submit
            </motion.button>
          </form>
        </>
      ) : (
        <EmailValidation isValid={isValid} />
      )}
    </div>
  );
};

export default Contact;
