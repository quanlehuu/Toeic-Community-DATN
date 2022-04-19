//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('Test API /api/user/checkUsername/:username', () => {
  it('Có username này thì trả về {count: 1}', (done) => {   
      let username = "maianhdao";
      chai.request(server)
          .get('/api/user/checkUsername/' + username)
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('count');
              res.body.should.have.property('count').eql("1");
              done();
          });
  }).timeout(10000);

  it('Không có username này thì trả về {count: 0}', (done) => {   
      let username = "abc";
      chai.request(server)
          .get('/api/user/checkUsername/' + username)
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('count');
              res.body.should.have.property('count').eql("0");
              done();
          });
  }).timeout(10000);
});



describe('Test API /api/post/getAll/:num', () => {
  it('Có username này thì trả về {count: 1}', (done) => {   
      let username = "maianhdao";
      const app = chai.request(server);
      app
          .post('/api/user/login')
          .send({'username': "maianhdao", 'password': "maianhdao"})
          .end((err, res) => {
            console.log(res.body);
          });
          
      app
          .get('/api/post/getAll/3')
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('ofUser');
              // res.body.should.have.property('count').eql("1");
              done();
          });
  }).timeout(10000);

  it('Không có username này thì trả về {count: 0}', (done) => {   
      let username = "abc";
      chai.request(server)
          .get('/api/user/checkUsername/' + username)
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('count');
              res.body.should.have.property('count').eql("0");
              done();
          });
  }).timeout(10000);
});






