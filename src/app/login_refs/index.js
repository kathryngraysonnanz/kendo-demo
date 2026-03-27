import React from 'react';
import {
  InputPrefix,
  TextArea,
} from "@progress/kendo-react-inputs";
import { SvgIcon } from "@progress/kendo-react-common";
import { letterSpaceIcon, passwordIcon } from "@progress/kendo-svg-icons";
import { Button } from '@progress/kendo-react-buttons';

export default function LoginRefs() {

 return (
      <form>
        <TextArea
        placeholder="Username"
        prefix={() => (
          <InputPrefix orientation="horizontal">
            <SvgIcon icon={letterSpaceIcon} />
          </InputPrefix>
        )}
        style={{
          backgroundColor: 'white',
          color: 'grey', 
          width: 300,
          display: 'flex',
          alignItems: 'center',
          padding: '5px 5px 10px'
        }}
      />

    <TextArea
        placeholder="Password"
        prefix={() => (
          <InputPrefix orientation="horizontal">
            <SvgIcon icon={passwordIcon} />
          </InputPrefix>
        )}
        style={{
          backgroundColor: 'white',
          color: 'grey', 
          width: 300,
          display: 'flex',
          alignItems: 'center',
          padding: '5px 5px 10px'
        }}
      />
      <br/>
      <Button>Submit</Button>
      </form>
  )
}

LoginRefs.defaultProps = {
 as: 'main',
};
