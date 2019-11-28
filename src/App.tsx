import React, { useState, useEffect } from 'react'


import Dante2 from 'Dante2'

const ref2 = React.createRef()
const ref3 = React.createRef()
window.ref = ref2;
window.ref2 = ref3;

const initRef = {
  blocks: [
    {
      data:{},
      depth: 0,
      entityRanges: [],
      inlineStyleRanges: [],
      key: 'aaa',
      text: 'agbag',
      type: 'unstyled'
    }
  ],
  entityMap: {}
}
const App = () => {

  const content = {
    blocks: [{
      data: {},
      depth: 0,
      entityRanges: [],
      inlineStyleRanges: [],
      key: 'bj1hm',
      text:'aaaa',
      type: 'unstyled'
    }],
    entityMap: {}
  }

  //@ts-ignore
  const [value, setValue] = useState( localStorage.getItem('@item') !== null ? JSON.parse(localStorage.getItem('@item')) : null  )
  // useEffect(()=>{
  //   console.log('aaa');
  //   (async ()=>{
  //     const res = await localStorage.getItem('@item')
  //     if(res){
  //       console.log('check', JSON.parse(res))
  //       setValue(JSON.parse(res))
  //     }
      
  //   })()
  // }, [])
  return (
    <div>
     
      <Dante2 ref={ref2} content = {value}>
     
      </Dante2>
      <Dante2
      ref={ref3}
          onChange
          ={ (editor:any) => { 
            window.editor = editor;
             setValue(editor.emitSerializedOutput()) 
             localStorage.setItem('@item', JSON.stringify(editor.emitSerializedOutput()))
            }}
        />
    </div>
  );

}

export default App;
