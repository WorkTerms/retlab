import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faRss } from '@fortawesome/free-solid-svg-icons/faRss';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons/faAddressCard';

import { Collapse, Tooltip } from 'bootstrap';

import * as AnchorJS from 'anchor-js';
import * as Turbo from '@hotwired/turbo';

window.Turbo = Turbo;
window.Collapse = Collapse;
window.Tooltip = Tooltip;
const anchors = new AnchorJS();

document.addEventListener('turbo:load', () => {
  anchors.add();

  const els = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  Array.from(els).forEach((el) => {
    new Tooltip(el); // eslint-disable-line no-new
  });
});

library.add(faRss);
library.add(faTwitter);
library.add(faLinkedin);
library.add(faGithub);
library.add(faEnvelope);
library.add(faAddressCard);

dom.watch();
