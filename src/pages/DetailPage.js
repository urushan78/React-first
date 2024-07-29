import React from 'react'
import { movieData } from '../dummy/data'
import { useParams } from 'react-router';

const DetailPage = () => {

const ni = useParams();
  console.log(ni.id);


  return (
    <div>

<h1>This is Detail page</h1>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi nesciunt consectetur ex aut animi ab eum, quod amet modi nisi fugit facilis doloremque.</p>

    </div>
  )
}

export default DetailPage