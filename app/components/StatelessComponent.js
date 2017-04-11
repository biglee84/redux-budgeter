import React from 'react';

//import component styles

require ('../styles/components/_component.scss')


const StatelessComponent = (props) => (
    <div className="">
        <p>I am a stateless component, use me for display components, I don't own data, just display it : {props.data}</p>
    </div>
);

export default StatelessComponent