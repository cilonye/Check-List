
exports.getFullDate = function (){
    const event = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return event.toLocaleDateString('en-US', options);
}

exports.getDay = function (){
    const event = new Date();
    const options = { weekday: 'long'};

    return event.toLocaleDateString('en-US', options);
}
