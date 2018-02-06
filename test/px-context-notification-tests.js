describe('px-context-notification default look & behavior', function () {
  let contextualNotifEl;
  beforeEach((done)=>{
    contextualNotifEl = fixture('PxContextualNotificationFixture');
    contextualNotifEl.opened = true;
    flush(()=>{
      done();
    });
  });

  it('fixture should exist', function() {
    expect(contextualNotifEl).to.exist;
  });

  it('is hidden but not removed from the dom when the `opened` property is set to false', (done) => {
    let contextualNotifRect = contextualNotifEl.getBoundingClientRect();
    expect(contextualNotifRect.height > 0).to.be.true;
    contextualNotifEl.opened = false;
    expect(document.querySelector('px-context-notification')).to.exist;
    setTimeout(() => {
      contextualNotifRect = contextualNotifEl.getBoundingClientRect();
      expect(contextualNotifRect.height === 0).to.be.true;
      done();
    }, 600);
  });

  it('fires the `px-context-notification-action-tapped` event when the contextual notification action icon is tapped', (done) => {
    var eventSpy = sinon.spy();
    contextualNotifEl.addEventListener('px-context-notification-action-tapped', eventSpy);

    setTimeout(() => {
      const actionDiv = Polymer.dom(contextualNotifEl.root).querySelector('.contextual-notification-right');
      const actionIcon = actionDiv.querySelector('px-icon');
      actionIcon.click();
      expect(eventSpy).to.have.been.calledOnce;
      done();
    }, 600);
  });

});

describe('px-context-notification custom size', function () {
  let contextualNotifEl;
  beforeEach((done)=>{
    contextualNotifEl = fixture('PxContextualNotificationCustomSizeFixture');
    contextualNotifEl.opened = true;
    flush(()=>{
      done();
    });
  });

  it('gets its height from the --px-context-notification-height style variable', function () {
    let contextualNotifRect = contextualNotifEl.getBoundingClientRect();
    expect(contextualNotifRect.height).to.be.closeTo(300, 5);
  });

});
