// Copyright 2018 The Outline Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const fs = require('fs/promises');
// const child_process = require('child_process');
const path = require('node:path');

const ANDROID_LIBS_FOLDER_PATH = path.join(
  'plugins',
  'cordova-plugin-outline',
  'android',
  'libs'
);
const TUN2SOCKS_ANDROID_FOLDER_PATH = path.join(
  '..',
  'output',
  'client',
  'android'
);

module.exports = async function () {
  console.log('Copying Android third party libraries...');
  await fs.mkdir(ANDROID_LIBS_FOLDER_PATH, {recursive: true});
  await fs.copyFile(
    path.join(TUN2SOCKS_ANDROID_FOLDER_PATH, 'tun2socks.aar'),
    path.join(ANDROID_LIBS_FOLDER_PATH, 'tun2socks.aar')
  );
};
