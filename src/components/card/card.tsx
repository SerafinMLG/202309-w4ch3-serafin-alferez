import { Advisor, Character } from '../../model/character';
import { Category } from '../../model/character';
import { Fighter } from '../../model/character';
import { King } from '../../model/character';
import { Squire } from '../../model/character';
import React from 'react';

export type AnyCharacter = King | Fighter | Advisor | Squire;

type Props = {
  character: AnyCharacter;
};

function makeExtraData(item: AnyCharacter) {
  let result;

  
  if ('reingYears' in item) {
    result=  <li>Años de reinado: {item.reingYears}</li>;
  } else if ('weapon' in item ) {
    result = 
      <>
      <li>Arma: {item.weapon}</li>
      <li>Destreza: {item.skillLevel}</li>
      </>;
  } else if ('adviseTo' in item  ) {
    result = 
      <li>Sirve a: </li>;
  } else {
    result = 
        <>
        <li>Peloteo: {item.serveLevel}</li>
        </>
  }

return result;
}
function makEmoji(category: Category) {
  switch (category) {
    case 'King':
      return '👑';
    case 'Fighter':
      return '🗡';
    case 'Advisor':
      return '🎓';
    default:
      return '🛡';
  }
}

interface Props {
  item: Character; // Asegúrate de tener la interfaz Character definida con las propiedades necesarias.
}

export function Card({ item }: Props) {
  return (
    <li className="character col">
      <div className="card character__card">
        <img src={`/img/${item.name.toLowerCase()}.jpg`} alt={`${item.name} ${item.family}`} className="character__picture card-img-top" />
        <div className="card-body">
          <h2 className="character__name card-title h4">{`${item.name} ${item.family}`}</h2>
          <div className="character__info">
            <ul className="list-unstyled">
              <li>Edad: {item.age} años</li>
              <li>
                Estado: {item.isAlive ? <i className="fas fa-thumbs-up"></i> : <i className="fas fa-thumbs-down"></i>}
              </li>
            </ul>
          </div>
          <div className="character__overlay">
            <ul className="list-unstyled">
              {makeExtraData(item)}
            </ul>
            <div className="character__actions">
              <button className="character__action btn">habla</button>
              <button className="character__action btn">muere</button>
            </div>
          </div>
        </div>
        <i className="emoji">{makeEmoji(item.category)}</i>
      </div>
    </li>
  );
}

export default Card;
