import React from 'react'
import Head from 'next/head'
import Base from '../layouts/Base'
import { Box } from '../components/Box'

export async function getStaticProps() {
  const meta = {
    title: 'puns :)',
    description:
      'lulz',
    tagline: 'From the Goofy Dictionary:',
    image: '/static/images/reminder-bw.jpg',
    primaryColor: 'cyan',
    secondaryColor: 'green',
  }

  return { props: meta }
}

function Reminder(props) {
  const { title, description, image } = props

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://rycerzes.github.io/reminder" property="og:url" />
        <meta content={`https://rycerzes.github.io${image}`} property="og:image" />
      </Head>

      <Box css={{ textAlign: 'justify' }}>
        <p>①<br />
          Endless loop : n., see Loop, Endless.<br />
          Loop, Endless: n., see Endless Loop.
        </p>
        <p>②<br />
          The three most dangerous things in the workd are a programmer with a soldering iron, a hardware engineer with a software patch and an user with an idea.
        </p>
        <p>③<br />
          software is like sex. it's better when it's free (づ￣ 3￣)づ
        </p>
          <em>- stolen from reddit & 4chan</em><br/>
          <em>forgive my broken humor {':3'}</em>
      </Box>
    </>
  )
}

Reminder.Layout = Base

export default Reminder
