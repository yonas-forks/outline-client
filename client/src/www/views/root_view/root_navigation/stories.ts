/*
  Copyright 2024 The Outline Authors
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
       http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

import {html} from 'lit';

import './index';

import type {RootNavigation} from './index';
import {localize} from '../../../testing/localize';

export default {
  title: 'Client/Root View/Root Navigation',
  component: 'root-navigation',
  args: {
    open: true,
    dataCollectionPageUrl:
      'https://support.google.com/outline/answer/15331222',
  },
};

export const Example = ({open, dataCollectionPageUrl}: RootNavigation) =>
  html`<root-navigation
    .localize=${localize}
    .open=${open}
    .dataCollectionPageUrl=${dataCollectionPageUrl}
  ></root-navigation>`;
