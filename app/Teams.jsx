import React from 'react'
import { TextRevealCardPreview } from './components/TextCardPreview'
import PointerH from './components/Pointerh'
import { Lamp } from './components/LampText'
import { TeamsShow } from './components/TeamFrame'
import { Form } from './components/Book'

const Teams = ({ data, contactdt }) => {
  console.log('h con', contactdt)
  return (
    <div>
      {/* <TextRevealCardPreview text={'hello'} textRev={'bye'}/>
         */}
      <div>
        <Lamp textone={data[0].mainHeading} texttwo={data[0].headingS} />
        <TeamsShow data={data} />
      </div>
      <PointerH textdef={contactdt.mainHeading || 'nan'} textanim={contactdt.highlight ||  'nan'} />
      <Form />
    </div>
  )
}

export default Teams