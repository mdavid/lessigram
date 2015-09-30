/**
 * Request data from the Facebook API. Call is wrapped to include user
 * authentication.
 * @param {String} url
 * @param {String} method (optional)
 * @param {Object} data (optional)
 * @param {Function} callback
 */
function facebook(...args) {

  const callback = args.pop();

  args.push(function(response) {

    if (!response) {
      return callback({ error: 'Invalid response.' });
    }

    if (response.error) {
      return callback({ error: response.error });
    }

    return callback(null, response);

  });

  function execute() {

    return FB.api.apply(FB, args);

  }

  FB.getLoginStatus(function(response) {

    if (response.status === 'connected') {

      return execute();

    }

    FB.login(function(response) {

      if (!response) {
        return callback({ error: 'Invalid response.' });
      }

      if (response.error) {
        return callback({ error: response.error });
      }

      return execute();

    }, {scope: 'publish_actions'});

  });
}


/**
 * Upload a photo to user's Facebook timeline.
 * @param  {String} url
 * @param  {Function} callback
 */
function uploadPhoto(url, callback) {

  facebook('/me/photos', 'POST', { url }, callback);

}


/**
 * Upload a photo to user's Facebook timeline and navigate the user to Facebook
 * profile page with the `makeprofile` option to set the user's profile photo.
 * @param  {String} url
 * @param  {Function} callback
 */
export function setFacebookProfilePhoto(url, callback) {

  uploadPhoto(url, function (error, response) {

    if (error) {
      return callback(error);
    }

    callback(null, 'https://www.facebook.com/photo.php?makeprofile=1&fbid=' + response.id);

  });

}


/**
 * Upload a photo to user's Facebook timeline and navigate the user to Facebook
 * profile page with the `preview_cover` option to set the user's cover photo.
 * @param  {String} url
 * @param  {Function} callback
 */
export function setFacebookCover(url, callback) {

  uploadPhoto(url, function (error, response) {

    if (error) {
      return callback(error);
    }

    callback(null, 'https://www.facebook.com/me?preview_cover=' + response.id);
  });

}


/**
 * Load the user's current profile photo.
 * @param  {Function}
 */
export function getFacebookProfilePhoto(callback) {

  return facebook('/me/picture?type=large', function(error, response) {

    if (error) {
      return callback(error);
    }

    callback(null, response.data.url);

  });

}
