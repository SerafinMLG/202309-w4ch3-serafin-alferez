import { Advisor, Category } from '../../model/character';
import { Fighter } from '../../model/character';
import { King } from '../../model/character';
import { Squire } from '../../model/character';
import React from 'react';

export type AnyCharacter = King | Fighter | Advisor | Squire;


function makeExtraData(item: AnyCharacter) {

  if ('reingYears' in item) {
    return  <li>Años de reinado: {item.reingYears}</li>;
  } else if ('weapon' in item ) {
    return <><li>Arma: {item.weapon}</li><li>Destreza: {item.skillLevel}</li></>
  } else if ('adviseTo' in item  ) {
    return <li>Sirve a: {item.adviseTo.name}</li>;
  } else if ('ServesTo' in item) {
    return <li>Asesora a: {item.servesTo.name}</li>;
  }
}
function addEmoji(category: Category) {
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

type Props = {
  item: AnyCharacter; // Asegúrate de tener la interfaz Character definida con las propiedades necesarias.
}

export function Card({ item }: Props) {
  return (
    <li className="character col">
      <div className="card character__card">
        <img
          src={`${item.name.toLowerCase()}.jpg`}
          alt={`${item.name} ${item.family}`}
          className="character__picture 
      {!character.isAlive && 'card-img-top'}"
        />
        <div className="card-body">
          <h2 className="character__name card-title h4">
            {item.name} {item.family}
          </h2>
          <div className="character__info">
            <ul className="list-unstyled">
              <li>Edad: {item.age} años</li>
              <li>
                Estado:{' '}
                {item.isAlive ? (
                  <i className="fas fa-thumbs-up" />
                ) : (
                  <i className="fas fa-thumbs-down" />
                )}
              </li>
            </ul>
          </div>
          <div className="character__overlay">
            <ul className="list-unstyled">{makeExtraData(item)}</ul>
            <div className="character__actions">
              <button className="character__action btn talk">habla</button>
              <button className="character__action btn dead">muere</button>
            </div>
          </div>
        </div>
        <i className="emoji"></i>
      </div>
    </li>
  );
}
