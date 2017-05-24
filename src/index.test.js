import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs'

const { JSDOM } = jsdom;

describe('First Test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  })
});


describe('index.html', () => {
  it('should say users', () => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    const dom = new JSDOM(index);
    const document = dom.window.document;
    const h1 = document.getElementsByTagName('h1')[0];
    expect(h1.innerHTML).to.equal("Users");
  });
});
