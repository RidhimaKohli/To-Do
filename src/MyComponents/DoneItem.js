import React, { useState , useEffect } from 'react';

export default function DoneItem(donetodo) {



    return ( 
<div>
<div className="todoItemDiv animate__animated animate__rubberBand">
<h6>{donetodo.title}</h6>

<br/>
</div>

</div>
        )
}