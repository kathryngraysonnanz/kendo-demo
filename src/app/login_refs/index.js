import React, {useRef, useEffect} from 'react';

export default function LoginRefs() {

 const pwinput = useRef(null);
 useEffect(() => {
   pwinput.current.focus();
 })

 return (
      <form>
        <label>
          Username:
          <input name="user" type="user"  />
        </label>
        <br/>
        <label>
          Password: 
          <input name="user" type="password" ref={pwinput} />
        </label>
      </form>
  )
}

LoginRefs.defaultProps = {
 as: 'main',
};
