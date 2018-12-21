import {config} from './config';

var auth = JSON.parse(localStorage.getItem('bearer'));

if (auth !== null) {
    auth = auth.bearer
}

export const get = (url) => {
    url = config.baseUrl + "api/" + url;
    
    return fetch(url, {
        method: 'GET',
        // mode : 'no-cors',
        // credentials:'include',
        headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json',
            'Authorization' : auth,
        }
    }).then(response => {
        if (response.ok) {
            const contentType = response.headers.get('Content-Type') || '';

            if (contentType.includes('application/json')) {
                    return response.json().catch(error => {
                    return Promise.resolve([]);
                });
            }
      
            return Promise.resolve([]);
        }

        if (response.status > 200) {
            return Promise.resolve([]);
        }

        return Promise.resolve([]);
    }).catch(error => {
        return Promise.resolve([]);
    });
}

//get No Auth
export const getNoAuth = (url) => {
    url = config.baseUrl + "api/" + url;
    
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json',
        }
    }).then(response => {
        if (response.ok) {
            const contentType = response.headers.get('Content-Type') || '';

            if (contentType.includes('application/json')) {
                    return response.json().catch(error => {
                    return Promise.resolve([]);
                });
            }
      
            return Promise.resolve([]);
        }

        if (response.status > 200) {
            return Promise.resolve([]);
        }

        return Promise.resolve([]);
    }).catch(error => {
        return Promise.resolve([]);
    });
}

// post
export const post = (url, post) => {
    url = config.baseUrl + "api/" + url;
    
    return fetch(url, {
        method: 'POST',
        // mode: "no-cors",
        headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json',
            'Authorization' : auth,
        },
        body: JSON.stringify(post)
    })
    .then(response => {
        if (response.ok) {
            const contentType = response.headers.get('Content-Type') || '';

            if (contentType.includes('application/json')) {
                    return response.json().catch(error => {
                    return Promise.resolve([]);
                });
            }  
            return Promise.resolve([]);
        }

        if (response.status > 200) {
            return Promise.resolve([]);
        }

        return Promise.resolve([]);
    }).catch(error => {
        return Promise.resolve([]);
    });
}

// post No Auth
export const postNoAuth = (url, post) => {
    url = config.baseUrl + "api/" + url;
    
    return fetch(url, {
        method: 'POST',
        // mode: "no-cors",
        headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json',
        },
        body: JSON.stringify(post)
    })
    .then(response => {
        if (response.ok) {
            const contentType = response.headers.get('Content-Type') || '';

            if (contentType.includes('application/json')) {
                    return response.json().catch(error => {
                    return Promise.resolve([]);
                });
            }  
            return Promise.resolve([]);
        }

        if (response.status > 200) {
            return Promise.resolve([]);
        }

        return Promise.resolve([]);
    }).catch(error => {
        return Promise.resolve([]);
    });
}

export const login = (param) => {
    var form = new FormData();
    form.append('client_id', config.client_id);
    form.append('client_secret', config.client_secret);
    form.append('grant_type', "password");
    form.append('username', param.username);
    form.append('password', param.password);

    let url = config.baseUrl+"oauth/token";
    
    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept' : 'application/json, application/xml, text/plain, text/html, *.*',
        },
        body: form
    })
    .then(response => {
        if (response.ok) {
            const contentType = response.headers.get('Content-Type') || '';

            if (contentType.includes('application/json')) {
                    return response.json().catch(error => {
                    return Promise.resolve([]);
                });
            }  
            return Promise.resolve([]);
        }

        if (response.status > 200) {
            return Promise.resolve([]);
        }

        return Promise.resolve([]);
    }).catch(error => {
        return Promise.resolve([]);
    });
}

export const printLayout = () => {
    const fs = window.require('fs')
    const remote = window.require('electron').remote;
    let printlay = remote.getCurrentWindow().webContents;
    printlay.print({silent: true })
}

export const postForm = (param, url) => {
    var form = new FormData();

    Object.keys(param).map(function(value) {
        form.append(value, param[value]);
    });

    url = config.baseUrl+ "api/" +url;

	return fetch(url, {
		method: 'POST',
	  	headers: {
	    	'Accept' : 'application/json, application/xml, text/plain, text/html, *.*',
	  	},
	  	body: form
    })
    .then(response => {
        if (response.ok) {
            const contentType = response.headers.get('Content-Type') || '';

            if (contentType.includes('application/json')) {
                    return response.json().catch(error => {
                    return Promise.resolve([]);
                });
            }  
            return Promise.resolve([]);
        }

        if (response.status > 200) {
            return Promise.resolve([]);
        }

        return Promise.resolve([]);
    }).catch(error => {
        return Promise.resolve([]);
    });
}

// put
export const put = (url, post) => {
    url = config.baseUrl + "api/" + url;
    
    return fetch(url, {
        method: 'PUT',
        // mode: "no-cors",
        headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json',
            'Authorization' : auth,
        },
        body: JSON.stringify(post)
    })
    .then(response => {
        if (response.ok) {
            const contentType = response.headers.get('Content-Type') || '';

            if (contentType.includes('application/json')) {
                    return response.json().catch(error => {
                    return Promise.resolve([]);
                });
            }  
            return Promise.resolve([]);
        }

        if (response.status > 200) {
            return Promise.resolve([]);
        }

        return Promise.resolve([]);
    }).catch(error => {
        return Promise.resolve([]);
    });
}

// put No Auth
export const putNoAuth = (url, post) => {
    url = config.baseUrl + "api/" + url;
    
    return fetch(url, {
        method: 'PUT',
        // mode: "no-cors",
        headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
        },
        body: JSON.stringify(post)
    })
    .then(response => {
        if (response.ok) {
            const contentType = response.headers.get('Content-Type') || '';

            if (contentType.includes('application/json')) {
                    return response.json().catch(error => {
                    return Promise.resolve([]);
                });
            }  
            return Promise.resolve([]);
        }

        if (response.status > 200) {
            return Promise.resolve([]);
        }

        return Promise.resolve([]);
    }).catch(error => {
        return Promise.resolve([]);
    });
}

// delete atau destroy
export const destroy = (url) => {
    url = config.baseUrl + "api/" + url;
    
    return fetch(url, {
        method: 'DELETE',
        // mode : 'no-cors',
        // credentials:'include',
        headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json',
            'Authorization' : auth,
        }
    }).then(response => {
        if (response.ok) {
            const contentType = response.headers.get('Content-Type') || '';

            if (contentType.includes('application/json')) {
                    return response.json().catch(error => {
                    return Promise.resolve([]);
                });
            }
      
            return Promise.resolve([]);
        }

        if (response.status > 200) {
            return Promise.resolve([]);
        }

        return Promise.resolve([]);
    }).catch(error => {
        return Promise.resolve([]);
    });
}


// delete atau destroy no Auth
export const destroyNoAuth = (url) => {
    url = config.baseUrl + "api/" + url;
    
    return fetch(url, {
        method: 'DELETE',
        // mode : 'no-cors',
        // credentials:'include',
        headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            const contentType = response.headers.get('Content-Type') || '';

            if (contentType.includes('application/json')) {
                    return response.json().catch(error => {
                    return Promise.resolve([]);
                });
            }
      
            return Promise.resolve([]);
        }

        if (response.status > 200) {
            return Promise.resolve([]);
        }

        return Promise.resolve([]);
    }).catch(error => {
        return Promise.resolve([]);
    });
}