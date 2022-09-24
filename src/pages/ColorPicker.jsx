import React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { Header } from '../components';


const ColorPicker = () => {

  const change = (args) => {
    document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
  }

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl" >
      <Header title="Color Picker" category="App" />
      <div className="text-center" >
        <div id="preview" />
        <div className="flex items-center justify-center gap-20 flex-wrap" >
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4" >Inline Pallete</p>
            <ColorPickerComponent height="350px" id="inline-pallete" mode="Palette"
             modeSwitcher={true} inline showButtons={false} change={change} />


          </div>
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4 " >Inline Picker</p>
            <ColorPickerComponent height="350px" id="inline-pallete"
             modeSwitcher={false} showButtons={false} inline mode="Picker" change={change} />
          </div>
        </div>

      
      </div>
    </div>
  )
}

export default ColorPicker