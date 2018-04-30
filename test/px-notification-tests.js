/**
 * @license
 * Copyright (c) 2018, General Electric
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

describe('px-notification default look & behavior', function () {
  let notificationEl;
  beforeEach((done)=>{
    notificationEl = fixture('PxNotificationFixture');
    notificationEl.opened = true;
    flush(()=>{
      done();
    });
  });

  it('fixture should exist', function() {
    expect(notificationEl).to.exist;
  });

  it('is hidden but not removed from the dom when the `opened` property is set to false', (done) => {
    let notificationRect = notificationEl.getBoundingClientRect();
    expect(notificationRect.height > 0).to.be.true;
    notificationEl.opened = false;
    expect(document.querySelector('px-notification')).to.exist;
    setTimeout(() => {
      notificationRect = notificationEl.getBoundingClientRect();
      expect(notificationRect.height === 0).to.be.true;
      done();
    }, 600);
  });

  it('fires the `px-notification-action-tapped` event when the notification action icon is tapped', (done) => {
    var eventSpy = sinon.spy();
    notificationEl.addEventListener('px-notification-action-tapped', eventSpy);

    setTimeout(() => {
      const actionDiv = Polymer.dom(notificationEl.root).querySelector('.notification-right');
      const actionIcon = actionDiv.querySelector('px-icon');
      actionIcon.click();
      expect(eventSpy).to.have.been.calledOnce;
      done();
    }, 600);
  });

});

describe('px-notification custom size', function () {
  let notificationEl;
  beforeEach((done)=>{
    notificationEl = fixture('PxNotificationCustomSizeFixture');
    notificationEl.opened = true;
    flush(()=>{
      done();
    });
  });

  it('gets its height from the --px-notification-height style variable', function () {
    let notificationRect = notificationEl.getBoundingClientRect();
    expect(notificationRect.height).to.be.closeTo(300, 5);
  });

});
