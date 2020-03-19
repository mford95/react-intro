import React from 'react'
import image from '../assets/contact.jpg';

export default function ContactCard(props) {
    return (
        <div>
            <div class="cardBox">
            <div class="card">
            <img src={props.userImg} />
  <h3>{props.firstName} {props.lastName}</h3>
  <p class="title">{props.jobTitle}</p>
  <p>{props.region}</p>
  <p>{props.phoneNumber}</p>
</div>
</div>
        </div>
    )
}
