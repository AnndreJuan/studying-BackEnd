// SRP - Single Responsibility Principle
// Principios da resposabilidade única

class Payment {
    constructor (pay) {
        this.pay = pay.toLowerCase();
        this.payStatus = 'pending';
        // validate logic
        //example, if pay method diffent as typesPay
        this.typesPay = ['credit','pix','money']; // example
    }
    confirmTypePay() {

        const payTypeValidate = this.typesPay.includes(this.pay); // validator
        if (payTypeValidate) {
            this.payStatus = 'confirmed';
        } else {
            this.payStatus = 'denied';
        }
        return this.payStatus;
    }
}

class SendNotification {
    sendMessage(message) {
        console.log(`message sent: ${message}`)
    }
}

const payment = new Payment('credit');
const statusPay = payment.confirmTypePay();
console.log(`Payment status: ${statusPay}`);

if (statusPay === 'confirmed') {
    const notifier = new SendNotification();
    notifier.sendMessage('Your order has conffimed.');
}
