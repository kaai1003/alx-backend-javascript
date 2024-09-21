const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
let appTest;

chai.use(chaiHttp);

describe('test suite for the index page', function() {
    it('should return 200 status', (done) => {
        chai.request('http://localhost:7865')
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            })
    });

    it('should return message "Welcome to the payment system"', (done) => {
        chai.request('http://localhost:7865')
            .get('/')
            .end((err, res) => {
                expect(res.text).to.equal('Welcome to the payment system');
                done();
            })
    });

    it('should return message "Payment methods for cart 1"', (done) => {
      chai.request('http://localhost:7865')
          .get('/cart/1')
          .end((err, res) => {
              expect(res.text).to.equal('Payment methods for cart 1');
              done();
          })
    });

    it('should return 200 status when id is number', (done) => {
      chai.request('http://localhost:7865')
          .get('/cart/13')
          .end((err, res) => {
              expect(res).to.have.status(200);
              done();
          })
    });

    it('should return 404 status when id not number', (done) => {
      chai.request('http://localhost:7865')
          .get('/cart/hi')
          .end((err, res) => {
              expect(res).to.have.status(404);
              done();
          })
    });

    it('should payment methods object with staus 200', (done) => {
        chai.request('http://localhost:7865')
            .get('/available_payments')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('payment_methods');
                expect(res.body.payment_methods).to.have.property('credit_cards');
                expect(res.body.payment_methods).to.have.property('paypal');
                done();
            })
      });

      it('should return "Welcome :userName" with staus 200', (done) => {
        chai.request('http://localhost:7865')
            .post('/login')
            .send({userName: 'Kacem'})
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('Welcome Kacem');
                done();
            })
      });

      it('should return "Username Missing!!" with staus 400', (done) => {
        chai.request('http://localhost:7865')
            .post('/login')
            .send({Name: 'Kacem'})
            .end((err, res) => {
                expect(res).to.have.status(400);
                expect(res.text).to.equal('Username Missing!!');
                done();
            })
      });
})
