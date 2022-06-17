import request from 'superagent';

const isAbsent = (property) => typeof property === 'undefined' || property === null;
const isPresent = (property) => !isAbsent(property);

const remove = ({url, headers, params, timeout, onlyBody = false}) => {
    const req = request.delete(url).type('json');
    if (isPresent(params)) req.query(params);
    if (isPresent(headers)) req.set(headers);
    if (isPresent(timeout)) req.timeout(timeout);
    return req.then((response) => (onlyBody ? response.body : response))
        .catch(err => console.error(err));
};

module.exports = {
    remove,
};
