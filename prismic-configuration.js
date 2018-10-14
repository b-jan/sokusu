module.exports = {

  apiEndpoint: 'https://sokusu.cdn.prismic.io/api/v2',

  // Prismic API Access token
  accessToken: 'MC5XOWp5a0JJQUFDc0FaVWll.TRZ077-977-9TO-_vToYEF7vv73vv70d77-977-977-977-977-9I1bvv73vv73vv70bUe-_ve-_vXnvv70ucg',

  // Prismic API OAuth
  clientId: 'W9jykBIAAC0AZUid',
  clientSecret: '11966c29a7a467682257a8c0ddb2087b',
  
  // Snipcart
  snipcartKey: 'NmU0ZDM0NmUtMDUyNC00OGU0LTkzZTQtZWZjYzZlYzhiZWIyNjM2NzUxMTk2ODU0Mjc4ODU5',
  
  // -- Links resolution rules
  // This function will be used to generate links to Prismic.io documents
  // As your project grows, you should update this function according to your routes
  linkResolver: function (doc) {
    if (doc.type == 'category') {
      return '/category/' + doc.uid;
    }
    if (doc.type == 'product') {
      return '/product/' + doc.uid;
    }
    return '/';
  }
};