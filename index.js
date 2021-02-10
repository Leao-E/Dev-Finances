const Modal = {
   modalOverlay: document.querySelector('.modal-overlay'),
   toogle(event){
      event.preventDefault();
      this.modalOverlay.classList.toggle('active');
   }
}

const Transaction = {

}