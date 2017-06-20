// Add / Update a key-value pair in the URL query parameters
export function addUpdateUrlParameter(uri:string, key:string, value:any) {
  // remove the hash part before operating on the uri
  var i = uri.indexOf('#');
  var hash = i === -1 ? '' : uri.substr(i);
  uri = i === -1 ? uri : uri.substr(0, i);

  var re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i');
  var separator = uri.indexOf('?') !== -1 ? '&' : '?';
  if (uri.match(re)) {
    uri = uri.replace(re, '$1' + key + '=' + value + '$2');
  } else {
    uri = uri + separator + key + '=' + value;
  }
  return uri + hash;  // finally append the hash as well
}

export function addNoCacheParameter(endpoint:string) {
  return addUpdateUrlParameter(endpoint, 'nocache', new Date().getTime());
}

export function milliSecondToTime(milliSecond: number) {
  var time: any;
  if (milliSecond > 0) {
    if (milliSecond >= 60000) {
      time = Math.floor(milliSecond / 60000);
      if (parseInt(time) > 0) {
        var suffix = 'MIN';
        if (parseInt(time) !== 1) {
          suffix = suffix + 'S';
        }
        time = ((time > 20) ? 20 : time) + ' ' + suffix;
      } else {
        time = null;
      }
    } else {
      time = Math.floor(milliSecond / 1000).toFixed(0);
      if (parseInt(time) > 0) {
        var suffix = 'SEC';
        if (parseInt(time) !== 1) {
          suffix = suffix + 'S';
        }
        time = time + ' ' + suffix;
      } else {
        time = null;
      }
    }
  } else {
    time = null;
  }
  return time;
}
