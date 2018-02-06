describe('px-context-notification default look & behavior', function () {
  let contextNotifEl;
  beforeEach((done)=>{
    contextNotifEl = fixture('PxContextNotificationFixture');
    contextNotifEl.opened = true;
    flush(()=>{
      done();
    });
  });

  it('fixture should exist', function() {
    expect(contextNotifEl).to.exist;
  });

  it('is hidden but not removed from the dom when the `opened` property is set to false', (done) => {
    let contextNotifRect = contextNotifEl.getBoundingClientRect();
    expect(contextNotifRect.height > 0).to.be.true;
    contextNotifEl.opened = false;
    expect(document.querySelector('px-context-notification')).to.exist;
    setTimeout(() => {
      contextNotifRect = contextNotifEl.getBoundingClientRect();
      expect(contextNotifRect.height === 0).to.be.true;
      done();
    }, 600);
  });

  it('fires the `px-context-notification-action-tapped` event when the context notification action icon is tapped', (done) => {
    var eventSpy = sinon.spy();
    contextNotifEl.addEventListener('px-context-notification-action-tapped', eventSpy);

    setTimeout(() => {
      const actionDiv = Polymer.dom(contextNotifEl.root).querySelector('.context-notification-right');
      const actionIcon = actionDiv.querySelector('px-icon');
      actionIcon.click();
      expect(eventSpy).to.have.been.calledOnce;
      done();
    }, 600);
  });

});

describe('px-context-notification custom size', function () {
  let contextNotifEl;
  beforeEach((done)=>{
    contextNotifEl = fixture('PxContextNotificationCustomSizeFixture');
    contextNotifEl.opened = true;
    flush(()=>{
      done();
    });
  });

  it('gets its height from the --px-context-notification-height style variable', function () {
    let contextNotifRect = contextNotifEl.getBoundingClientRect();
    expect(contextNotifRect.height).to.be.closeTo(300, 5);
  });

});
