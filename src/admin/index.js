import CMS from "netlify-cms"

CMS.registerEditorComponent({
    id: 'header3',
    label: 'NadpisH3',
    // A bogus field so that the component doesn't look weird when rendered:
    fields: [
      {label: 'H3',  name: "headerText", widget: 'string'}
    ],
    // Never match anything so that the separator will be recognized as a horizontal rule when the document is reloaded:
    pattern: /.^/,
    fromBlock: function(match) {
      return {
        headerText: match[1],
        headerAlignment: match[2]
      };
    },
    toBlock(obj) {
      return '### ' + obj.headerText;
    },
    toPreview(obj) {
      return '<h3>' + obj.headerText + '</h3>';
    }
  });
  CMS.registerEditorComponent({
    id: 'separator',
    label: '---',
    // A bogus field so that the component doesn't look weird when rendered:
    fields: [{ label: 'Separator', widget: 'select', options: ['---'], default: '---' }],
    // Never match anything so that the separator will be recognized as a horizontal rule when the document is reloaded:
    pattern: /.^/,
    toBlock(obj) {
      return '---';
    },
    toPreview(obj) {
      return '<hr>';
    }
  });