import React, { useEffect } from 'react'
import '../Styling/PaleBlueDot.css'
import { Typography } from '@material-ui/core'

export default function PaleBlueDot() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="pale-container">
      <Typography
        className='headers'
        align='left'
        variant='h3'>
        A Pale Blue Dot
      </Typography>
      <br />
      <Typography
        className='headers'
        variant='h6'
        align='left'
      >
        At Sagan's request, the Voyager 1 took the following image on its way to the edge of the solar system. The vido and excerpt below are taken from Carl Sagan's book <i> Pale Blue Dot.</i>
      </Typography>
      <iframe
        className="video"
        src="https://www.youtube.com/embed/GO5FwsblpT8"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
        allowFullScreen
        title="Carl Sagan's Pale Blue Dot"
      />
      <div className='excerpt'>
        <Typography
          className='body'
          variant='body2'>
          Look again at that dot. That's here. That's home. That's us. On it everyone you love, everyone you know, everyone you ever heard of, every human being who ever was, lived out their lives. The aggregate of our joy and suffering, thousands of confident religions, ideologies, and economic doctrines, every hunter and forager, every hero and coward, every creator and destroyer of civilization, every king and peasant, every young couple in love, every mother and father, hopeful child, inventor and explorer, every teacher of morals, every corrupt politician, every "superstar," every "supreme leader," every saint and sinner in the history of our species lived there--on a mote of dust suspended in a sunbeam.
          <br />

        </Typography >
        <br />

        <Typography
          className='body'
          variant='body2'>
          The Earth is a very small stage in a vast cosmic arena. Think of the rivers of blood spilled by all those generals and emperors so that, in glory and triumph, they could become the momentary masters of a fraction of a dot. Think of the endless cruelties visited by the inhabitants of one corner of this pixel on the scarcely distinguishable inhabitants of some other corner, how frequent their misunderstandings, how eager they are to kill one another, how fervent their hatreds.
          </Typography>
        <br />

        <Typography
          className='body'
          variant='body2'>
          Our posturings, our imagined self-importance, the delusion that we have some privileged position in the Universe, are challenged by this point of pale light. Our planet is a lonely speck in the great enveloping cosmic dark. In our obscurity, in all this vastness, there is no hint that help will come from elsewhere to save us from ourselves.
          </Typography >
        <br />

        <Typography
          className='body'
          variant='body2'>
          The Earth is the only world known so far to harbor life. There is nowhere else, at least in the near future, to which our species could migrate. Visit, yes. Settle, not yet. Like it or not, for the moment the Earth is where we make our stand.
          </Typography>
        <br />

        <Typography
          className='body'
          variant='body2'>
          It has been said that astronomy is a humbling and character-building experience. There is perhaps no better demonstration of the folly of human conceits than this distant image of our tiny world. To me, it underscores our responsibility to deal more kindly with one another, and to preserve and cherish the pale blue dot, the only home we've ever known.
          </Typography>
        <br />

        <Typography
          className='body'
          variant='body2'>
          — Carl Sagan, Pale Blue Dot, 1994
          </Typography>
        <br />

        <Typography
          className='body'
          variant='body2'>
          <i>Copyright © 1994 by Carl Sagan, Copyright © 2006 by Democritus Properties, LLC.
          All rights reserved including the rights of reproduction in whole or in part in any form.</i>
        </Typography>
      </div>
    </div>
  )
};