module.exports = {
  name: 'bulb',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/bulb',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
