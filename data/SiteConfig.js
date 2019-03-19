const config = {
  siteTitle: 'designnest.io',
  siteTitleShort: 'designnest.io',
  siteTitleAlt: 'designnest.io',
  siteLogo: '/logos/logo-1024.png',
  siteUrl: 'https://designnest.io',
  repo: 'https://github.com/designnestio/designnest_io',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription: 'Arif Hanif is a developer, designer, and writer who breaks down complex concepts' +
      ' for all skill levels.',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-97059600-1',
  disqusShortname: 'designnest',
  postDefaultCategoryID: 'Tech',
  userName: 'arif.hanif3',
  userEmail: 'designnest.io@gmail.com',
  userTwitter: '',
  userLocation: 'Rockville, MD',
  userDescription: 'I build open source projects and write the missing instruction manuals of the we' +
      'b.',
  menuLinks: [
    {
      name: 'About me',
      link: '/me/'
    }, {
      name: 'Blog Posts',
      link: '/blog/'
    }
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff'
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config
    .pathPrefix
    .replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') 
  config.siteUrl = config.siteUrl.slice(0, -1)

  // Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') 
  config.siteRss = `/${config.siteRss}`

module.exports = config
