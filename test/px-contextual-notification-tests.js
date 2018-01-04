describe('px-contextual-notification default look & behaviour', function () {
  let brandingBarEl;
  beforeEach((done)=>{
    brandingBarEl = fixture('PxBrandingBarFixture');
    flush(()=>{
      done();
    });
  });

  it('fixture should exist', function() {
    expect(brandingBarEl).to.exist;
  });

  it('element name should be correct', function() {
    expect(brandingBarEl.tagName).to.equal('px-contextual-notification');
  });

  it('branding bar should have a GE logo by default', function() {
    let geLogo = Polymer.dom(brandingBarEl.root).querySelector('px-ge-svg-logo');
    expect(geLogo).to.exist;
  });

  it('branding bar property should have default title of document.title', function() {
    expect(brandingBarEl.applicationTitle).to.equal(document.title);
  });

  it('branding bar should display default title of document.title', function() {
    let titleEl = Polymer.dom(brandingBarEl.root).querySelector('label');
    expect(titleEl.textContent).to.equal(document.title);
  });

});

describe('px-contextual-notification attributes setting', function () {
  it('setting application-title attribute should change displayed title', function() {
    let brandingBarEl = fixture('PxBrandingBarSetPropertiesFixture');
    expect(brandingBarEl.applicationTitle).to.equal('Moar Predix Please');
  });
});

describe('px-contextual-notification custom slot content', function () {
  let brandingBarEl;
  beforeEach((done)=>{
    brandingBarEl = fixture('PxBrandingBarCustomContentFixture');
    flush(()=>{
      done();
    });
  });

  it('setting title slot should change title property', function() {
    flush(function(done){
      expect(brandingBarEl.applicationTitle).to.equal('Moar Predix Please');
      done();
    });
  });

  it('setting title slot should change displayed title', function() {
    flush(function(done){
      let titleEl = Polymer.dom(brandingBarEl.root).querySelector('label');
      expect(titleEl.textContent).to.equal('Moar Predix Please');
      done();
    });
  });

  it('setting logo slot should change displayed logo', function() {
    flush(function(done){
      let logoEl = Polymer.dom(brandingBarEl).querySelector('circle');
      expect(logoEl).exists();
      expect(logoEl.tagName).to.equal('CIRCLE');
      done();
    });
  });

});
