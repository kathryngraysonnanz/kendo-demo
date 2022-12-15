import React from 'react';

export default function LoginAutofocus() {

 return (
   <form>
    <label>
       Username:
       <input name="user" type="user" />
    </label>
    <br/>
    <label>
       Password:
       <input name="user" type="password" autoFocus />
    </label>
  </form>
  )
}

LoginAutofocus.defaultProps = {
 as: 'main',
};
