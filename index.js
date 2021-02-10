const _$ = query => document.querySelector(query);

const Modal = {
   modalOverlay: _$('.modal-overlay'),
   toogle(event){
      event.preventDefault();
      this.modalOverlay.classList.toggle('active');
   }
}

const Transaction = {
   incomes () {

   },
   expenses () {

   },
   total () {

   }
}

const transactions = [
   {
      id: 1,
      amount: 500_00,
      date: '27/02/2021',
      description: 'LaLALAn'
   },
   {
      id: 2,
      amount: -4500_59,
      date: '27/02/2021',
      description: 'Sei lá!'
   },
   {
      id: 2,
      amount: 750_00,
      date: '27/02/2021',
      description: 'LaLALAn'
   },
];

const AppDOM  = {
   transactionsContainer: _$('#data-table tbody'),
   addTransaction(transaction, index){
      const tr = document.createElement('tr');
      tr.innerHTML = AppDOM.transactionInnerHTML(transaction);

      AppDOM.transactionsContainer.appendChild(tr);
   },
   transactionInnerHTML(transaction){
      const positive = transaction.amount > 0;
      const cssClass = positive ? 'income' : 'expanse';
      const amount = Utils.formatCurrency(transaction.amount);

      return `
      <td class="description">${transaction.description}</td>
      <td class="${cssClass}">${amount}</td>
      <td class="date">${transaction.date}</td>
      <td>
         <img src="./assets/minus.svg" alt="Remover transação">
      </td>
      `;
   }
}

const Utils = {
   formatCurrency(value){
      const signal = Number(value) < 0 ? '-' : '';

      value = String(value).replace(/\D/g, '');

      value = Number(value) / 100;

      value = value.toLocaleString('pt-BR', {
         style: 'currency',
         currency: 'BRL'
      });

      return signal + value;
   }
}

transactions.forEach(transaction => AppDOM.addTransaction(transaction));