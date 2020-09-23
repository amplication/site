var urlParameters = '';      
var linkParameters = '';
try 
{
  if (location.href.includes('?'))
  {
    urlParameters = location.href.split('?')[1];
    if (location.href.split('?')[1].includes('&'))
    {
      urlParameters = location.href.split('?')[1].split('&');
      for (j=0; j < urlParameters.length; j++)
      {
        if (urlParameters[j].includes('utm_'))
          linkParameters = linkParameters + ((j==0)?'':'&') + urlParameters[j];
      }          
    }
    else
    {
      if (location.href.split('?')[1].includes('utm_'))
        linkParameters = location.href.split('?')[1];
    }
  }
  if (document.referrer)
  {
    if (linkParameters == '')
      linkParameters = 'utm_source=' + document.referrer.split('/')[2];
    else
    {
      if (!linkParameters.includes('utm_source'))
        linkParameters = linkParameters + '&' + document.referrer.split('/')[2];
    }
  }
  if (linkParameters != '')
  {
    var links = document.getElementsByTagName("a");
    for(var i=0; i<links.length; i++) {
      if (links[i].href.includes('https://app.amplication.com'))
        links[i].href = 'https://app.amplication.com' + '?' + linkParameters;
      }
  }
}
catch (error) {}