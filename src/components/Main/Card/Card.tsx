import type { CardData } from '../../../types/types.ts';
import type { PopupConfig } from '../../../types/types.ts';
import ImagePopup from '../Popup/ImagePopup/ImagePopup.tsx';

type CardProps = {
  card: CardData;
  handleOpenPopup: (popup: PopupConfig) => void;
};

export default function Card(props: CardProps): React.JSX.Element {
  const { card, handleOpenPopup } = props;
  const { name, link } = card;
    
  return (
    <li className='card'>
      <img
        className='card__image'
        src={link}
        alt={name}
        onClick={() =>
          handleOpenPopup({
            children: <ImagePopup card={card} />,
          })
        }
      />
      <button
        aria-label='Delete card'
        className='card__delete-button'
        type='button'
      />
      <div className='card__description'>
        <h2 className='card__title'>{name}</h2>
        <button
          aria-label='Like card'
          type='button'
          className='card__like-button'
        />
      </div>
    </li>
  );
}
