import React from 'react';
import './bankcard.css';

const BankCard = (props) => {
    return ( 
<>

    <section className="cards-00">

    
      <div className="card-00">
        <img src={props.img} alt="Low Down Payment Icon" />
          <h3>{props.title}</h3>
          <p>{props.paragraph}</p>
          <ul>
            <li>{props.list1}</li>
            <li>{props.list2}</li>
            <li>{props.list3}</li>
          </ul>
      </div>

    </section>


</>


     );
}
 
export default BankCard;