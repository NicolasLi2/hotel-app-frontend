import styled from 'styled-components';
import GuestAddReview from './GuestAddReview';
import GuestsReviews from './GuestsReviews';
import Modal from './Modal';

const ModalBox = styled.div`
  display: flex;
  gap: 3rem;
`;

const ReviewBtn = styled.button`
  display: block;
  text-decoration: underline;
  border: none;
  background: none;
  padding: 1rem 2rem;
  font-size: 1.4rem;
  color: var(--color-grey-400);

  &:focus {
    outline: none;
  }
`;

export default function ReviewModal({ reviews }) {
  return (
    <ModalBox>
      <Modal>
        <Modal.Open
          {...(reviews?.length ? { opens: 'reviews' } : { opens: 'none' })}
        >
          <ReviewBtn>Sell all reviews</ReviewBtn>
        </Modal.Open>
        <Modal.Window name='reviews'>
          <GuestsReviews />
        </Modal.Window>
        <Modal.Window name='none'>
          <p style={{ paddingTop: '20px' }}>No more reviews</p>
        </Modal.Window>
      </Modal>
      <Modal>
        <Modal.Open opens='add-review'>
          <ReviewBtn>Add review</ReviewBtn>
        </Modal.Open>
        <Modal.Window name='add-review'>
          <GuestAddReview />
        </Modal.Window>
      </Modal>
    </ModalBox>
  );
}
