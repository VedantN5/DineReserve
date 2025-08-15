import React from 'react'
import {data} from '../restApi.json'

const Qualities = () => {
  return (
    <section className='qualities' id='qualities'>
        <div className="container">
            {data[0].ourQualities.map((Element) => (
                <div className="card" key={Element.id}>
                    <img src={Element.image} alt={Element.title}/>
                    <div className="title">{Element.title}</div>
                    <div className="description">{Element.description}</div>
                </div>
            ))};
        </div>
    </section>
  );
}; 

export default Qualities