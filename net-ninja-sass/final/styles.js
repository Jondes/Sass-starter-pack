import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'fontFamily': 'arial',
    'background': '#f8f9fb'
  },
  'html': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'body': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ul': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ol': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'li': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'form': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'fieldset': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'legend': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h1': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'h2': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'h3': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'h4': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'h5': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'h6': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'p': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'fieldset': {
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'img': {
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'li': {
    'listStyle': 'none'
  },
  'wrapper': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'maxWidth': [{ 'unit': 'px', 'value': 1200 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }],
    'boxSizing': 'border-box'
  },
  // VARIABLES
  '#main-nav': {
    'background': '#032f3e'
  },
  '#main-nav ul': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  '#main-nav li': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 0.1666667 }],
    'screen&&<w600': {
      'width': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  '#main-nav a': {
    'color': '#f8f9fb',
    'textDecoration': 'none',
    'padding': [{ 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 16 }],
    'display': 'block',
    'textAlign': 'center'
  },
  '#main-nav a:hover': {
    'background': '#04455b'
  },
  '#main-nav:after': {
    'content': '""',
    'display': 'block',
    'clear': 'both'
  },
  'section h1': {
    'margin': [{ 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center',
    'textTransform': 'uppercase',
    'color': '#032f3e',
    'fontSize': [{ 'unit': 'px', 'value': 24 }]
  },
  '#services': {
    'marginBottom': [{ 'unit': 'px', 'value': 60 }]
  },
  '#services li': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 0.3333 }],
    'boxSizing': 'border-box',
    'textAlign': 'center'
  },
  '#services img': {
    'width': [{ 'unit': '%H', 'value': 0.6 }],
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': '%H', 'value': 0.2 }, { 'unit': 'px', 'value': 20 }, { 'unit': '%H', 'value': 0.2 }]
  },
  '#services a': {
    'textDecoration': 'none',
    'color': '#032f3e',
    'fontWeight': 'bold'
  },
  '#services a:hover': {
    'color': '#3e1203'
  },
  '#services:after': {
    'content': '""',
    'display': 'block',
    'clear': 'both'
  },
  'lead-banner': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'position': 'relative',
    'color': 'white',
    'textAlign': 'right',
    'screen&&<w1200': {
      'maxHeight': [{ 'unit': 'px', 'value': 640 }],
      'overflow': 'hidden'
    }
  },
  'lead-banner banner-content': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 50 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'lead-banner img': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'lead-banner span': {
    'fontSize': [{ 'unit': 'px', 'value': 42 }],
    'display': 'block',
    'textTransform': 'uppercase',
    'fontWeight': 'bold',
    'screen&&<w3000&&>w1200': {
      'fontSize': [{ 'unit': 'px', 'value': 68 }]
    }
  },
  'lead-banner spansub-title': {
    'fontWeight': 'normal',
    'marginBottom': [{ 'unit': 'px', 'value': 30 }]
  },
  'lessons-banner': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'position': 'relative',
    'color': 'white',
    'textAlign': 'left',
    'screen&&<w1200': {
      'maxHeight': [{ 'unit': 'px', 'value': 640 }],
      'overflow': 'hidden'
    }
  },
  'lessons-banner banner-content': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 50 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'lessons-banner img': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'lessons-banner span': {
    'fontSize': [{ 'unit': 'px', 'value': 42 }],
    'display': 'block',
    'textTransform': 'uppercase',
    'fontWeight': 'bold',
    'screen&&<w3000&&>w1200': {
      'fontSize': [{ 'unit': 'px', 'value': 68 }]
    }
  },
  'lessons-banner spansub-title': {
    'fontWeight': 'normal',
    'marginBottom': [{ 'unit': 'px', 'value': 30 }]
  },
  'lessons-banner li': {
    'textTransform': 'uppercase',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'maxWidth': [{ 'unit': 'px', 'value': 500 }],
    'margin': [{ 'unit': 'px', 'value': 60 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 60 }, { 'unit': 'px', 'value': 0 }]
  },
  '#projects li': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 0.15 }],
    'marginRight': [{ 'unit': '%H', 'value': 0.02 }],
    'marginBottom': [{ 'unit': '%V', 'value': 0.02 }]
  },
  '#projects li:nth-child(6n)': {
    'marginRight': [{ 'unit': 'px', 'value': 0 }]
  },
  '#projects li img': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  }
});
