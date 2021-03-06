/* global module */
module.exports = {
  files: {
    src: ['lib/**/*.php', '<%= i18n.mainFile %>.php', 'uninstall.php'],
    expand: true,
  },
  options: {
    text_domain: '<%= i18n.textDomain %>',
    correct_domain: false,
    keywords: [
      '__:1,2d',
      '_e:1,2d',
      '_x:1,2c,3d',
      'esc_html__:1,2d',
      'esc_html_e:1,2d',
      'esc_html_x:1,2c,3d',
      'esc_attr__:1,2d',
      'esc_attr_e:1,2d',
      'esc_attr_x:1,2c,3d',
      '_ex:1,2c,3d',
      '_n:1,2,4d',
      '_nx:1,2,4c,5d',
      '_n_noop:1,2,3d',
      '_nx_noop:1,2,3c,4d',
      '__ngettext:1,2,3d',
      '__ngettext_noop:1,2,3d',
      '_c:1,2d',
      '_nc:1,2,4c,5d',
    ],
  },
};
